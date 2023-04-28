from django.shortcuts import render
from rest_framework.generics import ListAPIView, RetrieveAPIView, ListCreateAPIView
from .models import Book
from .serializers import BookListSerializer, BookDetailSerializer

class BookList(ListAPIView):
    queryset = Book.objects.all()
    serializer_class = BookListSerializer
    
class BookDetail(RetrieveAPIView):
    queryset = Book.objects.all()
    serializer_class = BookDetailSerializer
    
