FROM tiangolo/nginx-rtmp

RUN apt-get -y update && apt-get -y install ffmpeg

COPY nginx.conf /etc/nginx/nginx.conf
# COPY index.html /mnt/