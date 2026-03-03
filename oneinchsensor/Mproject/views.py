from django.shortcuts import render
def index(request):
    return render(request, 'index.html')
    
def about(request):
   return render(request, 'about.html')

def portfolio(request):
    return render(request, 'portfolio.html')
    
def contact(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        event = request.POST.get("event")
        phonenumber = request.POST.get("phonenumber")
        message = request.POST.get("message")

        #print("Name:", name)
       # print("Email:", email)
        #print("Event:", event)
       # print("phonenumber", phonenumber)
       # print("Message:", message)

    return render(request, "contact.html")