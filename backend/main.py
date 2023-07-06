from fastapi import FastAPI, HTTPException
import requests
from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()


# Configure CORS
origins = ["http://localhost:3000"]  
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=False,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def get_places(type: str, latitude: str, longitude: str):

    url = "https://travel-advisor.p.rapidapi.com/"+type+"/list-by-latlng"


    #querystring = {"latitude": lat, "longitude": lot}
    querystring = {"latitude":latitude,"longitude":longitude}
    
    headers = {
        "X-RapidAPI-Key": "781275f038msh43ccbf90187c7c5p1fa006jsn7c4ba4888a13",
        "X-RapidAPI-Host": "travel-advisor.p.rapidapi.com"
    }

    response = requests.get(url, headers=headers, params=querystring)
    response_json = response.json()
    print(response_json)

    if response.status_code == 200:
        return response_json
        print(response_json)
    else:
        raise HTTPException(status_code=response.status_code, detail=response_json)

@app.get("/currency")
def get_currency(from_currency: str, to: str, amount: int ):
    
    url = f"https://currency-converter5.p.rapidapi.com/currency/convert?from={from_currency}"
   
    
    querystring = {"format":"json","to": to,"amount": amount}
    
    headers = {
	    "X-RapidAPI-Key": "781275f038msh43ccbf90187c7c5p1fa006jsn7c4ba4888a13",
	    "X-RapidAPI-Host": "currency-converter5.p.rapidapi.com"
    }   

    response = requests.get(url, headers=headers, params=querystring)
    response_json = response.json()
    print(response_json)

    if response.status_code == 200:
        return response_json
        print(response_json)
    else:
        raise HTTPException(status_code=response.status_code, detail=response_json)
    
    
