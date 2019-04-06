from django.contrib import admin
from webapp.models import Category, Product, Photo, Order

class CategoryAdmin(admin.ModelAdmin):
    list_display = ['pk', 'name']
    ordering = ['name']
    search_fields = ['name', 'id']

class ProductAdmin(admin.ModelAdmin):
    list_display = ['pk', 'name']
    ordering = ['name']
    search_fields = ['pk', 'name']

class PhotoAdmin(admin.ModelAdmin):
    list_display = ['pk', 'product']
    search_fields = ['pk', 'product']

class OrderAdmin(admin.ModelAdmin):
    list_display = ['pk', 'user']
    search_fields = ['pk', 'user']


admin.site.register(Category, CategoryAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Photo, PhotoAdmin)
admin.site.register(Order, OrderAdmin)
