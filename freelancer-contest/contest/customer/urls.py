from django.urls import re_path
from .views import getCustomerInfo

urlpatterns = [
    re_path(r'^get_customer_data/$', getCustomerInfo.as_view())
]