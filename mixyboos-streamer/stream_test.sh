ffmpeg -r 30 -f lavfi -i testsrc -vf scale=1024:576 \
    -vcodec libx264 -profile:v baseline -pix_fmt \
    yuv420p -f flv \
    rtmp://localhost:1935/live