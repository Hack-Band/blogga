from rest_framework import status
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from rest_framework.views import APIView

from . import selectors
from .serializers import output


class PostList(APIView):
    permission_classes = [AllowAny]

    def get(self, request):
        response_data = selectors.post_list()
        response = {
            "message": "Retrieved posts",
            "data": output.PostList(response_data, many=True).data,
        }

        return Response(response, status=status.HTTP_200_OK)


class PostGet(APIView):
    permission_classes = [AllowAny]

    def get(self, request, slug):
        response_data = selectors.post_get(slug)
        response = {
            "message": "Retrieved post",
            "data": output.Post(response_data).data,
        }

        return Response(response, status=status.HTTP_200_OK)
