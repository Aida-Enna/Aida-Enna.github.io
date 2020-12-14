for /f %%f in ('dir /b %cd%\*.mp4') do (
ffmpeg -y -i %%f -vf "select=eq(n\,0)" -vf scale=640:-2 -q:v 1 %%~nf.jpg
)