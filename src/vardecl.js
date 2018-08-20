function vardecl() {
    console.log('---variable declaration---');

    console.log('let a, var b, const c');
    console.log(`b outside block before decl:${b}`);


    let a = 1;
    var b = 2;
    const c = 3;

    console.log(`a outside before block:${a}`);
    console.log(`b outside before block:${b}`);
    console.log(`c outside before block:${c}`);

    {
        try {
            console.log(`a inside block before redecl:`);
            console.log(`a inside block before redecl:${a}`);
        } catch (e) {
            console.log(e);
        }
        console.log(`b inside block before redecl:${b}`);
        try {
            console.log(`c inside block before redecl:`);
            console.log(`c inside block before redecl:${c}`);
        } catch (e) {
            console.log(e);
        }

        let a = 100;
        var b = 200;
        const c = 300;

        console.log(`a inside block after redecl:${a}`);
        console.log(`b inside block after redecl:${b}`);
        console.log(`c inside block after redecl:${c}`);

        try {
            console.log('try to redefine c:')
            c = 500;
        } catch (e) {
            console.log(e);
        }
    }

    console.log(`a outside after block:${a}`);
    console.log(`b outside after block:${b}`);
    console.log(`c outside after block:${c}`);
}

export { vardecl };