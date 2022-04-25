from django.urls import include, path
from rest import views
from rest_framework import routers

router = routers.DefaultRouter()
router.register(r'teachers', views.TeacherViewSet)

# Wire up our API using automatic URL routing.
# Additionally, we include login URLs for the browsable API.
urlpatterns = [
    path('', include(router.urls)),
]
