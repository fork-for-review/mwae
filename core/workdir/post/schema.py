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
    class Meta:
        model = Post
        fields = [
        ]

""" GraphQl/Relay Nodes """

class PostNode(DjangoObjectType):
    class Meta:
        model = Post
        filter_fields = {
        }
        interfaces = (graphene.relay.Node,)


class Query(object):
    """ Class for all queries in this app """

    # Query for one Post
    post = graphene.relay.Node.Field(PostNode)
    # Query for all Posts with filter
    posts = DjangoFilterConnectionField(
        PostNode,
        filterset_class=PostFilter,
    )
