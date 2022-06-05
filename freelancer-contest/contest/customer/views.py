from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Customer
from .serializers import CustomerSerializer


class getCustomerInfo(APIView):
    def get(self, request, *args, **kwargs):
        custs = Customer.objects.order_by('id')
        serializer = CustomerSerializer(instance=custs, many=True)
        return Response(serializer.data)