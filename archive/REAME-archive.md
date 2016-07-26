# Straas Documentation

## [AccountService](#AccountServiceAPI)

* [Create Token](#CreateToken)

## [AdBanner](#AdBannerAPI)

* [Get Ad Banners](#GetAdBanners)
* [Get an Ad Banner](#GetAnAdBanner)

## [Category](#CategoryAPI)

* [Get Categories](#GetCategories)

## [Live](#LiveAPI)

* [Get Live Details](#GetLiveDetails)
* [Get Lives](#GetLives)

## [Member](#MemberAPI)

* [Create New Member](#CreateNewMember)
* [Get Member Information](#GetMemberInformation)

## [MemberToken](#MemberTokenAPI)

* [Create Member Token](#CreateMemberToken)

## [Order](#OrderAPI)

### [Before Create Payment](#BeforeCreatePayment)

### [How to Begin Payment](#HowToBeginPayment)

* [Get Order](#GetOrder)
* [Get Orders](#GetOrders)

## [Playlist](#PlaylistAPI)

* [Get Playlist Details](#GetPlaylistDetails)
* [Get Playlist Details for End Users](#GetPlaylistDetailsForEndUsers)
* [Get Playlists](#GetPlaylists)

## [Video](#VideoAPI)

* [Get Video Details](#GetVideoDetails)
* [Get Video Details for End Users](#GetVideoDetailsForEndUsers)
* [Get Videos](#GetVideos)

# AccountService API<a name="AccountServiceAPI"></a>

## Create Token<a name="CreateToken"></a>

### POST /api/v1/service/token

Create an account service token.

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| uid | Application uid | true |  |
| secret | Application secret | true |  |
| type | Please use account_service to get an account token for account APIs. {account_service, internal_service} | true |  |


### Response Fields

Name : token
Description : JSON Web Token. A token can be alive in 24 hours. After it is expired or invalid, you have to get a new one.

### Request

#### Headers

<pre>Content-Type: application/json
Host: example.org
Cookie: </pre>

#### Route

<pre>POST /api/v1/service/token</pre>

#### Body

<pre>{"uid":"tester","secret":"secret","type":"account_service"}</pre>

### Response

#### Headers

<pre>Content-Type: application/json
Content-Length: 133
ETag: W/&quot;1cba11ac1c5d220d1ad6e8ec6e5523c5&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 6da82376-a2a3-4aef-a046-b94c9da96fba
X-Runtime: 0.604242</pre>

#### Status

<pre>201 Created</pre>

#### Body

<pre>{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBfaWQiOjQzLCJleHAiOjE0Njg5ODYwODd9.TiUcol4kRTqVJHkICb8JlcE4NXX_9o5EG30UBl7nRyA"
}</pre>

# AdBanner API<a name="AdBannerAPI"></a>

## Get Ad Banners<a name="GetAdBanners"></a>

### GET /api/v1/account/ad_banners

Return a list of ad_banners of current account.

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| page | Page of results to fetch. | false |  |
| per_page | Number of results to return per page. | false |  |


### Response Fields

Name : id
Description : Ad banner id

Name : name
Description : Ad banner name

Name : url
Description : Ad banner image url.

Name : link
Description : Ad banner link

Name : created_at
Description : Ad banner create time

Name : updated_at
Description : Ad banner update time

Name : error
Description : Error

### Request

#### Headers

<pre>Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBfaWQiOjQ0LCJleHAiOjE0Njg5ODYwODd9.VVkE8zdmD71N4D2ttqv03tuC21R9M8H_1vF9nE39l8k
Content-Type: application/json
Host: example.org
Cookie: </pre>

#### Route

<pre>GET /api/v1/account/ad_banners</pre>

### Response

#### Headers

<pre>Total: 1
Per-Page: 10
Content-Type: application/json
Content-Length: 195
ETag: W/&quot;733f011c7128be7a503b276d7b3938fc&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: a0366d7e-696d-4564-8426-f6f69ad0c54c
X-Runtime: 0.009552</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>[
  {
    "id": 17,
    "account_id": "straas-dev-2",
    "name": "ad-banner-1",
    "image": {
      "url": null
    },
    "link": "http://douglasoconnell.io/lilyan",
    "created_at": "2016-07-19T03:41:27Z",
    "updated_at": "2016-07-19T03:41:27Z"
  }
]</pre>

## Get an Ad Banner<a name="GetAnAdBanner"></a>

### GET /api/v1/account/ad_banners/:id

Return an ad_banner of current account.

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| id | Ad Banner id | true |  |


### Response Fields

Name : id
Description : Ad banner id

Name : account_id
Description : Ad banner account Id

Name : name
Description : Ad banner name

Name : url
Description : Ad banner image url.

Name : link
Description : Ad banner link

Name : created_at
Description : Ad banner create time

Name : updated_at
Description : Ad banner update time

Name : error
Description : Error

### Request

#### Headers

<pre>Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBfaWQiOjQ1LCJleHAiOjE0Njg5ODYwODd9.ohDoRKYiea4nzOEIHor2ujsMC7Uu792FWFkKXihb7q4
Content-Type: application/json
Host: example.org
Cookie: </pre>

#### Route

<pre>GET /api/v1/account/ad_banners/18</pre>

### Response

#### Headers

<pre>Content-Type: application/json
Content-Length: 194
ETag: W/&quot;a0d2ac2f99f5651be0509eb8099cd311&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 176bc505-eb4d-4d3b-86a2-6a19b4c225c5
X-Runtime: 0.006920</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>{
  "id": 18,
  "account_id": "straas-dev-3",
  "name": "ad-banner-2",
  "image": {
    "url": null
  },
  "link": "http://murazik.info/eve.bashirian",
  "created_at": "2016-07-19T03:41:27Z",
  "updated_at": "2016-07-19T03:41:27Z"
}</pre>

# Category API<a name="CategoryAPI"></a>

## Get Categories<a name="GetCategories"></a>

### GET /api/v1/account/categories

Get the video categories.

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| page | Page of results to fetch | false |  |
| per_page | Number of results to return per page | false |  |


### Response Fields

Name : id
Description : Category id

Name : default
Description : This category is a default category if this field is true. Every account has a default category.

Name : name
Description : Category name

Name : description
Description : Category description

Name : videos_count
Description : The number of videos which is contained in the category

Name : parent_id
Description : The id of the category which contains this category. If this category has no parent_id, then it is not a subcategory.

Name : created_at
Description : Timestamp the category is created at

Name : updated_at
Description : Timestamp the category is updated at

### Request

#### Headers

<pre>Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBfaWQiOjQ2LCJleHAiOjE0Njg5ODYwODd9.C1EHZ3xN7Ka81WnOmbXOz2fZQcqgkwTrq07X8LIpksg
Content-Type: application/json
Host: example.org
Cookie: </pre>

#### Route

<pre>GET /api/v1/account/categories?page=2&amp;per_page=5</pre>

#### Query Parameters

<pre>page: 2
per_page: 5</pre>

### Response

#### Headers

<pre>Link: &lt;http://example.org/api/v1/account/categories?page=1&amp;per_page=5&gt;; rel=&quot;first&quot;, &lt;http://example.org/api/v1/account/categories?page=1&amp;per_page=5&gt;; rel=&quot;prev&quot;, &lt;http://example.org/api/v1/account/categories?page=5&amp;per_page=5&gt;; rel=&quot;last&quot;, &lt;http://example.org/api/v1/account/categories?page=3&amp;per_page=5&gt;; rel=&quot;next&quot;
Total: 21
Per-Page: 5
Content-Type: application/json
Content-Length: 1147
ETag: W/&quot;f3a3ddb37dc2c0a9e7a26a3afb70ddc8&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 40dcc9a6-cef6-42b4-8a83-2dcc5cd14d80
X-Runtime: 0.008007</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>[
  {
    "id": 157,
    "default": false,
    "name": "category-5",
    "description": "Ipsam quasi dolor quia dolorem dignissimos earum fugiat.",
    "videos_count": 1,
    "lives_count": 0,
    "parent_id": null,
    "created_at": "2016-07-19T03:41:27Z",
    "updated_at": "2016-07-19T03:41:27Z"
  },
  {
    "id": 158,
    "default": false,
    "name": "category-6",
    "description": "Voluptatem qui sapiente exercitationem modi.",
    "videos_count": 1,
    "lives_count": 0,
    "parent_id": null,
    "created_at": "2016-07-19T03:41:27Z",
    "updated_at": "2016-07-19T03:41:27Z"
  },
  {
    "id": 159,
    "default": false,
    "name": "category-7",
    "description": "Rerum labore autem odio quae quasi.",
    "videos_count": 1,
    "lives_count": 0,
    "parent_id": null,
    "created_at": "2016-07-19T03:41:27Z",
    "updated_at": "2016-07-19T03:41:27Z"
  },
  {
    "id": 160,
    "default": false,
    "name": "category-8",
    "description": "Molestiae repudiandae error nihil quia.",
    "videos_count": 1,
    "lives_count": 0,
    "parent_id": null,
    "created_at": "2016-07-19T03:41:27Z",
    "updated_at": "2016-07-19T03:41:27Z"
  },
  {
    "id": 161,
    "default": false,
    "name": "category-9",
    "description": "Neque aut doloribus eveniet dolore labore.",
    "videos_count": 1,
    "lives_count": 0,
    "parent_id": null,
    "created_at": "2016-07-19T03:41:27Z",
    "updated_at": "2016-07-19T03:41:27Z"
  }
]</pre>

# Live API<a name="LiveAPI"></a>

## Get Live Details<a name="GetLiveDetails"></a>

### GET /api/v1/account/lives/:id

Get the live details.

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| id | The live id | true |  |


### Response Fields

Name : id
Description : live id

Name : account_id
Description : 

Name : title
Description : 

Name : synopsis
Description : 

Name : listed
Description : 

Name : available
Description : 

Name : highest_resolution
Description : 

Name : full_hd_enabled
Description : 

Name : embed_url
Description : 

Name : poster_url
Description : 

Name : cover_url
Description :  cover url

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : id
Description : 

Name : custom
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : current
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : poster_type
Description : Thumbnail set poster type

Name : thumbnail_urls
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : update_at
Description : Thumbnail set update at

Name : id
Description : Category id

Name : default
Description : 

Name : name
Description : 

Name : description
Description : 

Name : videos_count
Description : 

Name : parent_id
Description : 

Name : created_at
Description : 

Name : updated_at
Description : 

Name : id
Description : ad tag id

Name : name
Description : 

Name : url
Description : 

Name : default
Description : 

Name : created_at
Description : 

Name : updated_at
Description : 

Name : user
Description : user item

Name : videos
Description : related live vod video items

Name : created_at
Description : 

Name : updated_at
Description : 

## Get Lives<a name="GetLives"></a>

### GET /api/v1/account/lives

Get the live list.

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| page | Page of results to fetch | false |  |
| per_page | Number of results to return per page | false |  |


### Response Fields

Name : id
Description : live id

Name : account_id
Description : 

Name : title
Description : 

Name : synopsis
Description : 

Name : listed
Description : 

Name : available
Description : 

Name : highest_resolution
Description : 

Name : full_hd_enabled
Description : 

Name : embed_url
Description : 

Name : poster_url
Description : 

Name : cover_url
Description :  cover url

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : id
Description : 

Name : custom
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : current
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : poster_type
Description : Thumbnail set poster type

Name : thumbnail_urls
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : update_at
Description : Thumbnail set update at

Name : id
Description : Category id

Name : default
Description : 

Name : name
Description : 

Name : description
Description : 

Name : videos_count
Description : 

Name : parent_id
Description : 

Name : created_at
Description : 

Name : updated_at
Description : 

Name : id
Description : ad tag id

Name : name
Description : 

Name : url
Description : 

Name : default
Description : 

Name : created_at
Description : 

Name : updated_at
Description : 

Name : user
Description : user item

Name : videos
Description : related live vod video items

Name : created_at
Description : 

Name : updated_at
Description : 

# Member API<a name="MemberAPI"></a>

## Create New Member<a name="CreateNewMember"></a>

### POST /api/v1/account/members

Create a new member. This API is used to create a cms user when your member sign up completely.

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| id | Your member&#39;s id | true |  |
| email | Your member&#39;s email | true |  |


### Response Fields

Name : id
Description : Your member&#39;s id

Name : email
Description : Your member&#39; email

### Request

#### Headers

<pre>Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBfaWQiOjUwLCJleHAiOjE0Njg5ODYwODd9.7BrfQuAiy5jLpAYxGalXMqomBCy22yrsT8xkKZNCV44
Content-Type: application/json
Host: example.org
Cookie: </pre>

#### Route

<pre>POST /api/v1/account/members</pre>

#### Body

<pre>{"id":"cp_member","email":"cp_member@gamil.com"}</pre>

### Response

#### Headers

<pre>Content-Type: application/json
Content-Length: 48
ETag: W/&quot;c3d946b869a989576f7bfd17eba545e7&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: cb427f45-ec34-4011-8a0f-7acb88895dcc
X-Runtime: 0.006251</pre>

#### Status

<pre>201 Created</pre>

#### Body

<pre>{
  "id": "cp_member",
  "email": "cp_member@gmail.com"
}</pre>


## Get Member Information<a name="GetMemberInformation"></a>

### GET /api/v1/account/members/:id

Get the member information.

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| id | The member id | true |  |


### Response Fields

Name : id
Description : Your member&#39;s id

Name : email
Description : Your member&#39;s email

Name : membership
Description : Indicates this member has which membership. If the member has subscribed, his has a vip membership.  {vip, free}

### Request

#### Headers

<pre>Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBfaWQiOjQ5LCJleHAiOjE0Njg5ODYwODd9.Y65rY6Dp2GhoDpTn0PKdSjncSgSoNURYC-pL5gLbNPU
Content-Type: application/json
Host: example.org
Cookie: </pre>

#### Route

<pre>GET /api/v1/account/members/cp_member</pre>

### Response

#### Headers

<pre>Content-Type: application/json
Content-Length: 67
ETag: W/&quot;4a48e62977a40df788e88a34e1c3fa0e&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 00103291-7353-4f0c-8fb6-264de7dc65cb
X-Runtime: 0.004502</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>{
  "id": "cp_member",
  "email": "cp_member@gamil.com",
  "membership": "vip"
}</pre>

# MemberToken API<a name="MemberTokenAPI"></a>

## Create Member Token<a name="CreateMemberToken"></a>

### GET /api/v1/account/member_token

Create a new member token for your client. The member token is used for the member level api.

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| member_id | Your member&#39;s id | true |  |


### Response Fields

Name : token
Description : Json Web Token

### Request

#### Headers

<pre>Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBfaWQiOjUxLCJleHAiOjE0Njg5ODYwODd9.n6EiU2chYitOGNLU9hK8ZEfnBH9PL3h_ujkuP3BvMgE
Content-Type: application/json
Host: example.org
Cookie: </pre>

#### Route

<pre>GET /api/v1/account/member_token?member_id=cp_member</pre>

#### Query Parameters

<pre>member_id: cp_member</pre>

### Response

#### Headers

<pre>Content-Type: application/json
Content-Length: 132
ETag: W/&quot;78fc9d4cb66e3d7870d1d3e563e23e5c&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 99b98bbd-60eb-4a4e-b7f2-e9e43e1ccf8c
X-Runtime: 0.004124</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>{
  "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBfaWQiOjEsImV4cCI6MTQ2NzM0OTMyOX0.5tVqlHFU5ZooFlgNWyNTz5ZfVLV8veDjYqBtGb3HnAI"
}</pre>

# Order API<a name="OrderAPI"></a>

### Before Create Payment<a name="BeforeCreatePayment"></a>

  Before starting a payment, you must:

  1. Register a payment gateway account such as pay2go.
  2. Enable the monetization module.
  3. Enter the StraaS CMS (Content Management System) and setup the payment gateway information (i.e. __key__ and __secret__).
  4. Setup the monetization for your assets.

  Now the monetization rules are available by [`GET /api/v1/account/monetization_rules`](#monetizationrules-get-monetization-rules).

  
### How to Begin Payment<a name="HowToBeginPayment"></a>

  The payment procedure is divided into 2 parts.
  The first part is the communication between a client device (denoted as CILENT in the following section), which is your customer from browser or mobile App, and your server (denoted as SERVER in the following section).
  The second part is between SERVER and your StraaS CMS (denoted as CMS in following section).
  
  1. [CLIENT <-> SERVER] CLIENT invokes payment procedure through UI
     * e.g. An User clicks the purchase button in the web page and then send a request to SERVER to create an order.

  2. [SERVER <-> CMS] Create an order
     * After SERVER received CLIENT's request, SERVER creates an order by the [`API POST /api/v1/account/orders`](#order-create-order) with the monetization rule.
     * Note that:
       * The `return_url` should be provided in the API request by SERVER.
       * The `redirect_url` is provided in the API response by CMS.
  3. [CLIENT <-> SERVER] redirect user to the payment page
     * After SERVER received the response from CMS, SERVER MUST redirect CLIENT to `redirect_rul` provided by CMS (Http status 302).
     * All the transaction and data model will be handled in the page of `redirect_url`.
  4. After the transaction is accomplished, CLIENT will be redirected to the `return_url` provided by SERVER, and the whole procedure is accomplished.

  

## Get Order<a name="GetOrder"></a>

### GET /api/v1/account/orders/:id

Get the order.

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| id | The order id | true |  |


### Response Fields

Name : id
Description : The unique identifier of this order. It is also treated as an order number for the communication between you and your customor.

Name : customer
Description : 

Name : member_id
Description : 

Name : member_email
Description : 

Name : amount_cent
Description : 

Name : amount_currency
Description : 

Name : line_item
Description : 

Name : id
Description : 

Name : title
Description : 

Name : amount_cent
Description : 

Name : amount_currency
Description : 

Name : media_type
Description : 

Name : media_id
Description : 

Name : valid_duration_day
Description : 

Name : transaction
Description : 

Name : trade_number
Description : 

Name : payment_type
Description : 

Name : processed_at
Description : 

Name : credit_card_number
Description : Only the last 4 digits of the credit card number is displayed.

### Request

#### Headers

<pre>Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBfaWQiOjU1LCJleHAiOjE0Njg5ODYwODh9.heAwgcVlJvaA8-NfNUoWPkfcmxrwTZeTeQATMxzkRis
Content-Type: application/json
Host: example.org
Cookie: </pre>

#### Route

<pre>GET /api/v1/account/orders/123456</pre>

### Response

#### Headers

<pre>Content-Type: application/json
Content-Length: 467
ETag: W/&quot;0e0d3aec7c8cccef043ef95d91694b69&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 2cce3476-216a-4801-b687-091477754286
X-Runtime: 0.004409</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>{
  "id": "ABCD123",
  "amount_cent": 10000,
  "amount_currency": "TWD",
  "customer": {
    "member_id": "cp_member",
    "member_email": "cp_member@gamil.com"
  },
  "line_item": {
    "id": 123,
    "title": "monetizable item title",
    "amount_cent": 10000,
    "amount_currency": "TWD",
    "media_type": "video",
    "media_id": "ABdf123",
    "valid_duration_day": 60
  },
  "transaction": {
    "trade_number": "dsfas12335",
    "payment_type": "credit_card",
    "processed_at": "Thu, 23 Jun 2016 08:56:13 UTC +00:00",
    "credit_card_number": "************1234"
  }
}</pre>

## Get Orders<a name="GetOrders"></a>

### GET /api/v1/account/orders

Get the order list.

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| member_id | Your member&#39;s id | true |  |
| includes | The extra resources you&#39;d like to be returned. {line_item, transaction} | false |  |
| page | Page of results to fetch | false |  |
| per_page | Number of results to return per page | false |  |


### Response Fields

Name : id
Description : The unique identifier of this order. It is also treated as an order number for the communication between you and your customor.

Name : customer
Description : 

Name : member_id
Description : 

Name : member_email
Description : 

Name : amount_cent
Description : 

Name : amount_currency
Description : 

Name : line_item
Description : 

Name : id
Description : 

Name : title
Description : 

Name : amount_cent
Description : 

Name : amount_currency
Description : 

Name : media_type
Description : 

Name : media_id
Description : 

Name : valid_duration_day
Description : 

Name : transaction
Description : 

Name : trade_number
Description : 

Name : payment_type
Description : 

Name : processed_at
Description : 

Name : credit_card_number
Description : Only the last 4 digits of the credit card number is displayed.

### Request

#### Headers

<pre>Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBfaWQiOjUzLCJleHAiOjE0Njg5ODYwODd9.o8jtUBkAfuxqSyyDQ5MWOqQz10VskdnTBXXcYszcKT4
Content-Type: application/json
Host: example.org
Cookie: </pre>

#### Route

<pre>GET /api/v1/account/orders?member_id=12345&amp;includes=line_item%2Ctransaction</pre>

#### Query Parameters

<pre>member_id: 12345
includes: line_item,transaction</pre>

### Response

#### Headers

<pre>Content-Type: application/json
Content-Length: 469
ETag: W/&quot;14838afb1417ca80f4add46de1107cd2&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 63744edd-2c67-4ba2-a3b2-75b14325e1b0
X-Runtime: 0.004666</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>[
  {
    "id": "ABCD123",
    "amount_cent": 10000,
    "amount_currency": "TWD",
    "customer": {
      "member_id": "cp_member",
      "member_email": "cp_member@gamil.com"
    },
    "line_item": {
      "id": 123,
      "title": "monetizable item title",
      "amount_cent": 10000,
      "amount_currency": "TWD",
      "media_type": "video",
      "media_id": "ABdf123",
      "valid_duration_day": 60
    },
    "transaction": {
      "trade_number": "dsfas12335",
      "payment_type": "credit_card",
      "processed_at": "Thu, 23 Jun 2016 08:56:13 UTC +00:00",
      "credit_card_number": "************1234"
    }
  }
]</pre>

# Playlist API<a name="PlaylistAPI"></a>

## Get Playlist Details<a name="GetPlaylistDetails"></a>

### GET /api/v1/account/playlists/:id

Get the playlist details

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| id | The playlist id | true |  |


### Response Fields

Name : id
Description : playlist id

Name : account_id
Description : 

Name : title
Description : 

Name : synopsis
Description : 

Name : videos_count
Description : videos count

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : poster_url
Description : 

Name : embed_url
Description : 

Name : user
Description : user item

Name : id
Description : ad tag id

Name : name
Description : 

Name : url
Description : 

Name : default
Description : 

Name : created_at
Description : 

Name : updated_at
Description : 

Name : ad_play_mode
Description : 

Name : created_at
Description : 

Name : updated_at
Description : 

### Request

#### Headers

<pre>Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBfaWQiOjU3LCJleHAiOjE0Njg5ODYwODh9.s08RxWAhHRRbLytyAhE6asb6g1Nae7jqeUrUi8Stitc
Content-Type: application/json
Host: example.org
Cookie: </pre>

#### Route

<pre>GET /api/v1/account/playlists/beFjySsq?page=1&amp;per_page=5</pre>

#### Query Parameters

<pre>page: 1
per_page: 5</pre>

### Response

#### Headers

<pre>Content-Type: application/json
Content-Length: 371
ETag: W/&quot;be05c349bc3e9fec8a31365a407fe52b&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: c3256a57-8370-4782-84bf-d2b3cc3e9edd
X-Runtime: 0.011049</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>{
  "id": "beFjySsq",
  "account_id": "straas-dev-16",
  "title": "video title2",
  "synopsis": "Voluptatem quos vitae et dolorum.",
  "videos_count": 0,
  "thumbnail_urls": null,
  "poster_url": null,
  "embed_url": "https://app-staging.straas.net/straas-dev-16/playlists/beFjySsq",
  "user": null,
  "ad_tag": null,
  "ad_play_mode": "once",
  "created_at": "2016-07-19T03:41:28Z",
  "updated_at": "2016-07-19T03:41:28Z"
}</pre>


## Get Playlist Details for End Users<a name="GetPlaylistDetailsForEndUsers"></a>

### GET /api/v1/member/playlists/:id

The end user can only get the playlist details which are authorized. Otherwise, the response will be a `unauthorized resource` error.

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| id | The playlist id | true |  |


### Response Fields

Name : id
Description : playlist id

Name : title
Description : 

Name : synopsis
Description : 

Name : videos_count
Description : videos count

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : poster_url
Description : 

Name : embed_url
Description : 

Name : user
Description : user item

Name : id
Description : ad tag id

Name : name
Description : 

Name : url
Description : 

Name : default
Description : 

Name : created_at
Description : 

Name : updated_at
Description : 

Name : ad_play_mode
Description : 

Name : created_at
Description : 

Name : updated_at
Description : 

### Request

#### Headers

<pre>Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBfaWQiOjYxLCJleHAiOjE0Njg5ODYwODl9.gUPUX_73jSJ05HfxAp1x3w0dfv7LRssHuj61TlspJHo
Content-Type: application/json
Host: example.org
Cookie: </pre>

#### Route

<pre>GET /api/v1/member/playlists/kLYoUzmR?page=1&amp;per_page=5</pre>

#### Query Parameters

<pre>page: 1
per_page: 5</pre>

### Response

#### Headers

<pre>Content-Type: application/json
Content-Length: 358
ETag: W/&quot;be364d3a96e1ef0894c693fbc3122009&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 9301971b-86f4-4f84-b088-f1f7f9b28566
X-Runtime: 0.010694</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>{
  "id": "kLYoUzmR",
  "title": "video title4",
  "synopsis": "Optio quo magni dicta necessitatibus ratione sit.",
  "videos_count": 0,
  "thumbnail_urls": null,
  "poster_url": null,
  "embed_url": "https://app-staging.straas.net/straas-dev-33/playlists/kLYoUzmR",
  "user": null,
  "ad_tag": null,
  "ad_play_mode": "once",
  "created_at": "2016-07-19T03:41:29Z",
  "updated_at": "2016-07-19T03:41:29Z"
}</pre>

## Get Playlists<a name="GetPlaylists"></a>

### GET /api/v1/account/playlists

Get playlists.

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| page | Page of results to fetch | false |  |
| per_page | Number of results to return per page | false |  |


### Response Fields

Name : id
Description : playlist id

Name : account_id
Description : 

Name : title
Description : 

Name : synopsis
Description : 

Name : videos_count
Description : videos count

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : poster_url
Description : 

Name : embed_url
Description : 

Name : user
Description : user item

Name : id
Description : ad tag id

Name : name
Description : 

Name : url
Description : 

Name : default
Description : 

Name : created_at
Description : 

Name : updated_at
Description : 

Name : ad_play_mode
Description : 

Name : created_at
Description : 

Name : updated_at
Description : 

### Request

#### Headers

<pre>Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBfaWQiOjU2LCJleHAiOjE0Njg5ODYwODh9.VaXQ6lp6EROqqUImjGbj5R62OHH-YXl2v2hxmVJUt_E
Content-Type: application/json
Host: example.org
Cookie: </pre>

#### Route

<pre>GET /api/v1/account/playlists?page=1&amp;per_page=5</pre>

#### Query Parameters

<pre>page: 1
per_page: 5</pre>

### Response

#### Headers

<pre>Total: 1
Per-Page: 5
Content-Type: application/json
Content-Length: 382
ETag: W/&quot;c913c17885cc90150b5658f2b419fa13&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 86fbc0fe-f13a-4881-9261-f0dfe2b4a917
X-Runtime: 0.076671</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>[
  {
    "id": "BvDvzuxH",
    "account_id": "straas-dev-14",
    "title": "video title1",
    "synopsis": "Voluptatibus assumenda qui et dignissimos.",
    "videos_count": 0,
    "thumbnail_urls": null,
    "poster_url": null,
    "embed_url": "https://app-staging.straas.net/straas-dev-14/playlists/BvDvzuxH",
    "user": null,
    "ad_tag": null,
    "ad_play_mode": "once",
    "created_at": "2016-07-19T03:41:28Z",
    "updated_at": "2016-07-19T03:41:28Z"
  }
]</pre>

# Video API<a name="VideoAPI"></a>

## Get Video Details<a name="GetVideoDetails"></a>

### GET /api/v1/account/videos/:id

Get the video details.

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| id | The video id | true |  |


### Response Fields

Name : id
Description : video id

Name : account_id
Description : 

Name : title
Description : 

Name : synopsis
Description : 

Name : listed
Description : 

Name : available
Description : 

Name : accomplished
Description : 

Name : duration
Description : 

Name : resolution
Description : 

Name : embed_url
Description : 

Name : id
Description : 

Name : author
Description : 

Name : location
Description : 

Name : language
Description : 

Name : video_id
Description : 

Name : updated_at
Description : 

Name : poster_url
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : source
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : id
Description : 

Name : custom
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : pre
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : mid
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : post
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : poster_type
Description : Thumbnail set poster type

Name : thumbnail_urls
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : update_at
Description : Thumbnail set update at

Name : id
Description : Category id

Name : default
Description : 

Name : name
Description : 

Name : description
Description : 

Name : videos_count
Description : 

Name : parent_id
Description : 

Name : created_at
Description : 

Name : updated_at
Description : 

Name : id
Description : ad tag id

Name : name
Description : 

Name : url
Description : 

Name : default
Description : 

Name : created_at
Description : 

Name : updated_at
Description : 

Name : user
Description : user item

Name : id
Description : tag id

Name : name
Description : 

Name : description
Description : 

Name : taggings_count
Description : 

Name : statistic_summary
Description : 

Name : created_at
Description : 

Name : updated_at
Description : 

### Request

#### Headers

<pre>Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBfaWQiOjU5LCJleHAiOjE0Njg5ODYwODh9.Jxdbl6fBtkzBwAHUL7t-tZzlL-ZYfxBtAeyTuuOU5pg
Content-Type: application/json
Host: example.org
Cookie: </pre>

#### Route

<pre>GET /api/v1/account/videos/MaRRu56A</pre>

### Response

#### Headers

<pre>Content-Type: application/json
Content-Length: 1245
ETag: W/&quot;2bc4fca58fcc8276e0124be2d137db7a&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 640f1767-a51a-4fe3-b401-2c18f43169b7
X-Runtime: 0.044587</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>{
  "id": "MaRRu56A",
  "account_id": "straas-dev-19",
  "title": "Accusantium eos et quasi voluptatem necessitatibus.",
  "synopsis": "Voluptates a esse qui.",
  "public": true,
  "accomplished": true,
  "duration": 9340521,
  "resolution": "_1080p",
  "privacy": "PUBLIC",
  "available": true,
  "available_from": null,
  "available_till": null,
  "stream_url": "http://example.com/test.m3u8",
  "metadata": {
    "id": 10,
    "author": null,
    "location": null,
    "language": null,
    "video_id": "MaRRu56A",
    "updated_at": "2016-07-19T03:41:28Z"
  },
  "poster_url": null,
  "thumbnail_urls": null,
  "download_urls": {
    "source": "gs://straasio-vod-raw-staging-as/straas-dev-19/201607190341_MaRRu56A"
  },
  "embed_url": "https://app-staging.straas.net/straas-dev-19/videos/MaRRu56A",
  "thumbnail_set": null,
  "category": {
    "id": 185,
    "default": true,
    "name": "未分類",
    "description": "預設分類",
    "videos_count": 0,
    "lives_count": 0,
    "parent_id": null,
    "created_at": "2016-07-19T03:41:28Z",
    "updated_at": "2016-07-19T03:41:28Z"
  },
  "ad_tag": {
    "id": 24,
    "name": "ad-tag-4",
    "url": "http://hagenes.io/kellie",
    "default": false,
    "created_at": "2016-07-19T03:41:28Z",
    "updated_at": "2016-07-19T03:41:28Z"
  },
  "user": null,
  "tags": [

  ],
  "statistic_summary": null,
  "live_id": null,
  "live_started_at": null,
  "live_ended_at": null,
  "created_at": "2016-07-19T03:41:28Z",
  "updated_at": "2016-07-19T03:41:28Z"
}</pre>

## Get Video Details for End Users<a name="GetVideoDetailsForEndUsers"></a>

### GET /api/v1/member/videos/:id

The end user can only get the video details which are authorized. Otherwise, the response will be a `unauthorized resource` error.

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| id | The video id | true |  |


### Response Fields

Name : id
Description : video id

Name : title
Description : 

Name : synopsis
Description : 

Name : listed
Description : 

Name : available
Description : 

Name : accomplished
Description : 

Name : duration
Description : 

Name : resolution
Description : 

Name : embed_url
Description : 

Name : id
Description : 

Name : author
Description : 

Name : location
Description : 

Name : language
Description : 

Name : video_id
Description : 

Name : updated_at
Description : 

Name : poster_url
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : source
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : id
Description : 

Name : custom
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : pre
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : mid
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : post
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : poster_type
Description : Thumbnail set poster type

Name : thumbnail_urls
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : update_at
Description : Thumbnail set update at

Name : id
Description : Category id

Name : default
Description : 

Name : name
Description : 

Name : description
Description : 

Name : videos_count
Description : 

Name : parent_id
Description : 

Name : created_at
Description : 

Name : updated_at
Description : 

Name : id
Description : ad tag id

Name : name
Description : 

Name : url
Description : 

Name : default
Description : 

Name : created_at
Description : 

Name : updated_at
Description : 

Name : user
Description : user item

Name : id
Description : tag id

Name : name
Description : 

Name : description
Description : 

Name : taggings_count
Description : 

Name : statistic_summary
Description : 

Name : created_at
Description : 

Name : updated_at
Description : 

### Request

#### Headers

<pre>Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBfaWQiOjYzLCJleHAiOjE0Njg5ODYwODl9.J_xZkVIRw0HhxikZgmqlQb12o7oz9RT8bgCo9h0opZQ
Content-Type: application/json
Host: example.org
Cookie: </pre>

#### Route

<pre>GET /api/v1/member/videos/Nmx2eZx4</pre>

### Response

#### Headers

<pre>Content-Type: application/json
Content-Length: 1238
ETag: W/&quot;ab9e7938e6e0ad3a9a4d431d5f55f37e&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 92f8a871-a63f-4c68-bf15-0f182423e0a7
X-Runtime: 0.024502</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>{
  "id": "Nmx2eZx4",
  "title": "Non qui sint optio odit.",
  "synopsis": "Fugit commodi quaerat enim et consequatur quia consequatur voluptates.",
  "public": true,
  "accomplished": true,
  "duration": 7796243,
  "resolution": "_1080p",
  "privacy": "PUBLIC",
  "available": true,
  "available_from": null,
  "available_till": null,
  "stream_url": "http://example.com/test.m3u8",
  "metadata": {
    "id": 12,
    "author": null,
    "location": null,
    "language": null,
    "video_id": "Nmx2eZx4",
    "updated_at": "2016-07-19T03:41:29Z"
  },
  "poster_url": null,
  "thumbnail_urls": null,
  "download_urls": {
    "source": "gs://straasio-vod-raw-staging-as/straas-dev-36/201607190341_Nmx2eZx4"
  },
  "embed_url": "https://app-staging.straas.net/straas-dev-36/videos/Nmx2eZx4",
  "thumbnail_set": null,
  "category": {
    "id": 200,
    "default": true,
    "name": "未分類",
    "description": "預設分類",
    "videos_count": 0,
    "lives_count": 0,
    "parent_id": null,
    "created_at": "2016-07-19T03:41:29Z",
    "updated_at": "2016-07-19T03:41:29Z"
  },
  "ad_tag": {
    "id": 32,
    "name": "ad-tag-13",
    "url": "http://wisoky.io/wilbert",
    "default": false,
    "created_at": "2016-07-19T03:41:29Z",
    "updated_at": "2016-07-19T03:41:29Z"
  },
  "user": null,
  "tags": [

  ],
  "statistic_summary": null,
  "live_id": null,
  "live_started_at": null,
  "live_ended_at": null,
  "created_at": "2016-07-19T03:41:29Z",
  "updated_at": "2016-07-19T03:41:29Z"
}</pre>

## Get Videos<a name="GetVideos"></a>

### GET /api/v1/account/videos

Get the video list.

### Parameters

| Name | Description | Required | Scope |
|------|-------------|----------|-------|
| page | Page of results to fetch | false |  |
| per_page | Number of results to return per page | false |  |
| ids | Video ids | false |  |
| category_ids | Category ids | false |  |
| tag_ids | Tag ids | false |  |
| order_by | Specifies the method used to order entries in the API response. {create_time} | false |  |


### Response Fields

Name : id
Description : video id

Name : account_id
Description : 

Name : title
Description : 

Name : synopsis
Description : 

Name : listed
Description : 

Name : available
Description : 

Name : accomplished
Description : 

Name : duration
Description : 

Name : resolution
Description : 

Name : embed_url
Description : 

Name : id
Description : 

Name : author
Description : 

Name : location
Description : 

Name : language
Description : 

Name : video_id
Description : 

Name : updated_at
Description : 

Name : poster_url
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : source
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : id
Description : 

Name : custom
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : pre
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : mid
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : post
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : poster_type
Description : Thumbnail set poster type

Name : thumbnail_urls
Description : 

Name : _720x405
Description : 

Name : _480x270
Description : 

Name : _128x72
Description : 

Name : update_at
Description : Thumbnail set update at

Name : id
Description : Category id

Name : default
Description : 

Name : name
Description : 

Name : description
Description : 

Name : videos_count
Description : 

Name : parent_id
Description : 

Name : created_at
Description : 

Name : updated_at
Description : 

Name : id
Description : ad tag id

Name : name
Description : 

Name : url
Description : 

Name : default
Description : 

Name : created_at
Description : 

Name : updated_at
Description : 

Name : user
Description : user item

Name : id
Description : tag id

Name : name
Description : 

Name : description
Description : 

Name : taggings_count
Description : 

Name : statistic_summary
Description : 

Name : created_at
Description : 

Name : updated_at
Description : 

### Request

#### Headers

<pre>Authorization: Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJhcHBfaWQiOjU4LCJleHAiOjE0Njg5ODYwODh9.GSbZFDKdVDwBjdxDhAN45UiXIE6Kntt1AJwY8TBF25g
Content-Type: application/json
Host: example.org
Cookie: </pre>

#### Route

<pre>GET /api/v1/account/videos?page=1&amp;per_page=5</pre>

#### Query Parameters

<pre>page: 1
per_page: 5</pre>

### Response

#### Headers

<pre>Total: 1
Per-Page: 5
Content-Type: application/json
Content-Length: 1260
ETag: W/&quot;bec7f4b3939bc49dea64edeea675ffde&quot;
Cache-Control: max-age=0, private, must-revalidate
X-Request-Id: 9c646c6e-8cea-4641-815b-c242a4b07d89
X-Runtime: 0.030569</pre>

#### Status

<pre>200 OK</pre>

#### Body

<pre>[
  {
    "id": "dwSAXXwP",
    "account_id": "straas-dev-18",
    "title": "Eveniet vel voluptate voluptates.",
    "synopsis": "Non ullam quam placeat et eos velit sed.",
    "public": true,
    "accomplished": true,
    "duration": 4611692,
    "resolution": "_1080p",
    "privacy": "PUBLIC",
    "available": true,
    "available_from": null,
    "available_till": null,
    "stream_url": "http://example.com/test.m3u8",
    "metadata": {
      "id": 9,
      "author": null,
      "location": null,
      "language": null,
      "video_id": "dwSAXXwP",
      "updated_at": "2016-07-19T03:41:28Z"
    },
    "poster_url": null,
    "thumbnail_urls": null,
    "download_urls": {
      "source": "gs://straasio-vod-raw-staging-as/straas-dev-18/201607190341_dwSAXXwP"
    },
    "embed_url": "https://app-staging.straas.net/straas-dev-18/videos/dwSAXXwP",
    "thumbnail_set": null,
    "category": {
      "id": 184,
      "default": true,
      "name": "未分類",
      "description": "預設分類",
      "videos_count": 0,
      "lives_count": 0,
      "parent_id": null,
      "created_at": "2016-07-19T03:41:28Z",
      "updated_at": "2016-07-19T03:41:28Z"
    },
    "ad_tag": {
      "id": 23,
      "name": "ad-tag-3",
      "url": "http://romaguera.org/nolan.greenfelder",
      "default": false,
      "created_at": "2016-07-19T03:41:28Z",
      "updated_at": "2016-07-19T03:41:28Z"
    },
    "user": null,
    "tags": [

    ],
    "statistic_summary": null,
    "live_id": null,
    "live_started_at": null,
    "live_ended_at": null,
    "created_at": "2016-07-19T03:41:28Z",
    "updated_at": "2016-07-19T03:41:28Z"
  }
]</pre>
