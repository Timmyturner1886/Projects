Hello Timo, 
I used axios instead of the default fetch client.
I opted to build the whole thing from scratch so that you can have a contrast between the two source codes.
In terms of making the request I used axios library which is provided by the cdn on the head section of the index.html file.
In the post request of the getMessage() function I have used promise chaining instead of async await which is called once the form is submited.
In th post request of the getMessage2() function I have utilized the async await. So you can observe the two and pick whichever suits you.
Personally I prefer promise chaining due to the ease of error handling.

The request are being conducted the only problem is that I am unauthorized, I think the access token you provided is probably expired.

The UI is unresponsive!!!