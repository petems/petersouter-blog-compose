FROM nginx
# Delete defaults
RUN rm /etc/nginx/nginx.conf
RUN rm etc/nginx/conf.d/default.conf
COPY nginx.conf /etc/nginx/nginx.conf
COPY sites-enabled/petersouter.co.uk.conf /etc/nginx/sites-available/petersouter.co.uk.conf
COPY conf.d/ghost_blog_petersouter.co.uk-upstream.conf /etc/nginx/conf.d/ghost_blog_petersouter.co.uk-upstream.conf
COPY petersouter.co.uk.crt /etc/nginx/petersouter.co.uk.crt
COPY petersouter.co.uk.key /etc/nginx/petersouter.co.uk.key

EXPOSE 80 443

CMD ["nginx", "-g", "daemon off;"]
