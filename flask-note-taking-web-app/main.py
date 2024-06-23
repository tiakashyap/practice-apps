from website.templates import create_app

app = create_app()

#only want to run web server if we run this file directly
if __name__ == '__main__':
    app.run(debug=True) #re-run flask code every time we add python



