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
    
    def create(self, validated_data):

        is_coming = False
        a = Teacher.objects.get_or_create(
            name=str(validated_data.data["name"]).capitalize())
        if validated_data.data["coming"] == "True":
            is_coming = True
        a.update(coming=is_coming)
        a.save() 