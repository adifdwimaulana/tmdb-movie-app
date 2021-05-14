const auth = (app: any): void => {
    let isAuthenticated: boolean = app.$cookies.get('isAuthenticated')
    console.log(isAuthenticated)

    if(!isAuthenticated){
        console.log(isAuthenticated)
        app.redirect('/login')
    }
}

export default auth