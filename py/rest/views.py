from rest_framework import viewsets
from rest_framework import permissions
from .serializers import TeacherSerializer
from .models import Teacher


class TeacherViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = Teacher.objects.all()
    serializer_class = TeacherSerializer

