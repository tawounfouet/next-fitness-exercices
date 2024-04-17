

```sh
npx create-next-app@latest ./

npm install mongoose mongodb

# https://v2.chakra-ui.com/getting-started
npm i @chakra-ui/react @emotion/react @emotion/styled framer-motion

# code-source : https://github.com/BenBktech/Task-List-Typescript-NextJS-MongoDB

npm run dev

npm install @chakra-ui/icons
```


## Rapid API
```bash
# Exercises by API-Ninjas
# url : https://rapidapi.com/apininjas/api/exercises-by-api-ninjas
```


### Testing Endpoint Using JS
```js
const url = 'https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps';
const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '287c5058a7mshea84886f4cf6c10p1010f4jsna4227c798ad5',
		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.text();
	console.log(result);
} catch (error) {
	console.error(error);
}
```

### Testing Endpoint using Python - requests
```python
import requests

url = "https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises"

querystring = {"muscle":"biceps"}

headers = {
	"X-RapidAPI-Key": "287c5058a7mshea84886f4cf6c10p1010f4jsna4227c798ad5",
	"X-RapidAPI-Host": "exercises-by-api-ninjas.p.rapidapi.com"
}

response = requests.get(url, headers=headers, params=querystring)

print(response.json())
```
### Testing Endpoint using Python - http.client


```python
import http.client

conn = http.client.HTTPSConnection("exercises-by-api-ninjas.p.rapidapi.com")

headers = {
    'X-RapidAPI-Key': "287c5058a7mshea84886f4cf6c10p1010f4jsna4227c798ad5",
    'X-RapidAPI-Host': "exercises-by-api-ninjas.p.rapidapi.com"
}

conn.request("GET", "/v1/exercises?muscle=biceps", headers=headers)

res = conn.getresponse()
data = res.read()

print(data.decode("utf-8"))
```

## MongoDB

```sh
username : thomasawounfouet
pwd : ku5gCPUz5i4SyZN7