from django.http import HttpResponse
from django.shortcuts import render

# Create your views here.
def home_view(request, *args, **kwargs):
    print(request.user)
    return render(request, "home.html", {})

def about_view(request, *args, **kwargs):
    my_context = {
        "title": "this is about us",
        "is_true": True,
        "my_number": 123,
        "my_list": [1,2,3],
        "my_html": "<h1>Hello World</h1>"
    }
    return render(request, "about.html", my_context)

def contact_view(request, *args, **kwargs):
    return render(request, "contact.html", {})

def social_view(request, *args, **kwargs):
    return HttpResponse("<h1>Social Page</h1>")