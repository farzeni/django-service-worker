from django.shortcuts import render
from django.http import HttpResponseRedirect, HttpResponse, Http404, JsonResponse
from django.shortcuts import get_object_or_404, redirect
from django.core.urlresolvers import reverse
from django.contrib.auth.models import User, Group
from django.views.generic.base import TemplateView

# Create your views here.

class IndexView(TemplateView):
    template_name = 'index.html'