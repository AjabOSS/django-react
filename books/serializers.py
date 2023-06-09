from rest_framework import serializers
from .models import Book

class BookListSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ("name", "code")
        
class BookDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ("name", "code")
