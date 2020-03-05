import graphene
import django_filters
from graphene import relay

from graphene_django.filter import DjangoFilterConnectionField
from graphene_django.types import DjangoObjectType

from .models import (
    Post,
)

""" GraphQl filters """


class PostFilter(django_filters.FilterSet):
    title = django_filters.CharFilter(lookup_expr='icontains')

    class Meta:
        model = Post
        fields = [
            'title',
        ]


""" GraphQl/Relay Nodes """


class PostNode(DjangoObjectType):
    class Meta:
        model = Post
        filter_fields = {
        }
        interfaces = (graphene.relay.Node,)


""" Mutations """


class PostCreate(relay.ClientIDMutation):
    post = graphene.Field(PostNode)

    class Input:
        title = graphene.String()
        text = graphene.String()

    def mutate_and_get_payload(root, info, **input):
        title = input.get('title')
        text = input.get('text')

        post = Post(
            title=title,
            text=text,
        )
        post.save()

        return CreatePost(post=post)


class Query(graphene.ObjectType):
    """ Class for all queries in this app """

    # Query for one Post
    post = graphene.relay.Node.Field(PostNode)
    # Query for all Posts with filter
    posts = DjangoFilterConnectionField(
        PostNode,
        filterset_class=PostFilter,
    )


class Mutation(graphene.ObjectType):
    """ Class for all mutations in this app """

    # Mutation that creates one post
    post_create = PostCreate.Field()
