# Authentication

## Introduction
In this topic, you will learn how to create authentication token in StraaS to access StraaS's powerful cloud.
To make authenticated calls to StraaS APIs, you will retrieve an `client_id` and `client_secret` in 
[StraaS CMS](https://cms.straas.io). Once you obtain secrets, you can start to make authenticated requests.
StraaS APIs use token-based authentication. The BEARER token should
be provided in an Authorization header for all API calls.

## Two Kinds of Access tokens
There are two kinds of StraaS's APIs, app APIs and member APIs,
indicating different roles and privileges. You need different types of 
access tokens to access these two types of APIs.

**NOTE that for security reason, each token will be expired 24 hours after created. Please implement the related cache to improve the performance**

### App Token
**App Token** grants access to app APIs, which are used
to access the assets including videos, playlists, monetization settings and 
the member’s data under a specific StraaS account. Most actions can be achieved
by app APIs.

#### Create App Token
To create an app token, you should get the **client_id** and **client_secret** from StraaS team at first.

Send a **POST** request to [create app token API](https://straas.github.io/StraaS-web-document/#apptoken-create-token) to get a valid access token:
```
curl -X POST --header 'Content-Type: application/json' \
--header 'Accept: application/json' \
-d '{"client_id":<YOUR_CLIENT_ID>,"client_secret":<YOUR_CLIENT_SECRET>}' \
'https://app.straas.net/api/v1/app/token'
```

A success response will look like this:
```
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBfaWQiOjg4MywiZXhwIjoxNDY4NTcyNDMyfQ.mfSXrlBtGLckF3X3Ig5sCH-wX2-9grOpXw0BOsM_PWs"
}
```

### Member Token
**Member token** represents access to member APIs, which are in charge
of access control of end users (i.e. audiences). Members can only access their
own assets such as a paid video or a public playlist by member tokens.


## Create Member Token
To create a member token, you need to get an **app token** and create a StraaS member first
([How to create a StraaS member?](
https://github.com/StraaS/web-document/wiki/Register-a-member-avatar-in-StraaS#create-a-new-member)).

Send a **POST** request to [create member token API](https://straas.github.io/StraaS-web-document/#member-create-member-token) to get a member token for your client:
```
curl -X POST -H 'Accept: application/json' \
-H "Authorization: Bearer <YOUR_APP_TOKEN>" \
-H "Content-Length: 0" \
"https://app.straas.net/api/v1/app/members/<MEMBER_ID>/token"
```
The `<YOUR_APP_TOKEN>` is the app token that you get from [create app token API](https://straas.github.io/StraaS-web-document/#apptoken-create-token).  
The `<MEMBER_ID>` is your member's id that you passed to the API when create a new member.

A success response will look like this:
```
{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBfaWQiOjEsImV4cCI6MTQ2NzM0OTMyOX0.5tVqlHFU5ZooFlgNWyNTz5ZfVLV8veDjYqBtGb3HnAI"
}
```

## Make authenticated API requests
Once you get the token, you can add the following header to your request to make an authenticated
request: `Authorization: Bearer <YOUR_TOKEN>`. The `<YOUR_TOKEN>` is the value of the app token(for app APIs) or the member token(for member APIs).

Example:
```
curl -X GET -H "Accept: application/json" \
-H "Authorization: Bearer <YOUR_TOKEN>" \
"https://app.straas.net/api/v1/app/videos?page=1&per_page=10"
```