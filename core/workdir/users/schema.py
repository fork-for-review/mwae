import graphene
import django_filters

from django.contrib.auth import get_user_model
from graphene_django import DjangoObjectType
from graphene_django.filter import DjangoFilterConnectionField


""" GraphQl Filters """


class UserFilter(django_filters.FilterSet):
    class Meta:
        model = get_user_model()
        fields = [
            'username',
            'email',
        ]


""" GraphQl/Relay Nodes """


class UserNode(DjangoObjectType):
    class Meta:
        model = get_user_model()
        filter_fields = {
            'username': ['exact'],
        }
        interfaces = (graphene.relay.Node, )


""" GraphQl Mutations """


class UserCreate(graphene.relay.ClientIDMutation):
    user = graphene.Field(UserNode)

    class Input:
        username = graphene.String(required=True)
        password = graphene.String(required=True)
        email = graphene.String(required=True)

    def mutate_and_get_payload(root, info, **input):
        user = get_user_model()(
            username=input.get('username'),
            email=input.get('email'),
        )

        user.set_password(input.get('password'))
        user.save()

        return UserCreate(user=user)


class Query(graphene.ObjectType):
    user = graphene.relay.Node.Field(UserNode)
    users = DjangoFilterConnectionField(
        UserNode,
        filterset_class=UserFilter,
    )


class Mutation(graphene.ObjectType):
    user_create = UserCreate.Field()
