import graphene

# Schemas
import post.schema


class Query(
    post.schema.Query,
    graphene.ObjectType,
):
    pass


class Mutation(
    post.schema.Mutation,
    graphene.ObjectType,
):
    pass


schema = graphene.Schema(
    query=Query,
    mutation=Mutation,
)
