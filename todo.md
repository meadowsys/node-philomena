# TODO LIST [api docs](https://derpibooru.org/pages/api)

## misc

- [ ] figure out how to use gulp/other tools to minify before publish to npm

## routes

- [ ] GET /api/v1/json/comments/:comment_id
- [ ] GET /api/v1/json/images/:image\_id (key, filter_id)
- [ ] POST /api/v1/json/images (key, url) (do later lol)
- [X] GET /api/v1/json/images/featured
- [ ] GET /api/v1/json/tags/:tag_id
- [ ] GET /api/v1/json/posts/:post_id
- [ ] GET /api/v1/json/profiles/:user_id
- [ ] GET /api/v1/json/filters/:filter_id (key)
- [ ] GET /api/v1/json/filters/system (page)
- [ ] GET /api/v1/json/filters/user (key, page)
- [ ] GET /api/v1/json/oembed (url)
- [ ] GET /api/v1/json/search/comments (key, page)
- [ ] GET /api/v1/json/search/galleries (key, page)
- [ ] GET /api/v1/json/search/posts (key, page)
- [ ] GET /api/v1/json/search/images (key, filter_id, page, per_page, q, sd, sf)
- [ ] GET /api/v1/json/search/tags (page)
- [ ] POST /api/v1/json/search/reverse (key, url, distance)
- [ ] GET /api/v1/json/forums
- [ ] GET /api/v1/json/forums/:short_name
- [ ] GET /api/v1/json/forums/:short_name/topics (page)
- [ ] GET /api/v1/json/forums/:short_name/topics/:topic_slug
- [ ] GET /api/v1/json/forums/:short_name/topics/:topic_slug/posts (page)
- [ ] GET /api/v1/json/forums/:short_name/topics/:topic_slug/posts/:post_id

## responses

- [X] image
- [ ] comment
- [ ] forum
- [ ] topic
- [ ] post
- [ ] tag
- [ ] user
- [ ] filter
- [ ] links
- [ ] awards
- [ ] gallery
- [ ] image error
- [ ] oembed
