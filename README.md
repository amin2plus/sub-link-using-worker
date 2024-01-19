just a simple cloudflare worker script that you can use for making .json subscription link for using on sing-box application,

your subscription links would be like this:

https://worker.dev/?subs=1st

https://worker.dev/?subs=2st

https://worker.dev/?subs=3st

.

.

.

your JSON body goes between {   } under each provider:
```js
        jsonData = {
       };
```
