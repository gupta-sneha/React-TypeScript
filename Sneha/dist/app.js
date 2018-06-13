(function () {
    var _this = this;
    var l;
    l = "fdffg";
    var a = "asdf";
    var a1 = "asdf";
    var b = 10;
    var b1 = 10;
    var c = true;
    var c1 = true;
    var d = {};
    var d1 = {};
    var e = {
        kkk: "some value"
    };
    var someVar = 'aa';
    var arr = ['aa', 'bb'];
    var arr1 = ['aa', 'bb'];
    var users = [
        {
            name: 'aaa',
            age: 10
        },
        {
            name: 'bob',
            age: 10
        }
    ];
    var arrAny = [10, 'aa', true];
    var usr = {
        name: 'asdf',
        age: 11
    };
    var usrs = [
        {
            name: 'arr',
            age: 10
        }
    ];
    usrs.push({
        name: 'test',
        age: 10
    });
    function add(x, y) {
        return x + y;
    }
    var add1 = function (x, y) { return x + y; };
    function typeAdd(x, y) {
        return x + y;
    }
    var typeAdd1 = function (x, y) { return x + y; };
    function log(msg) {
        console.log(msg);
    }
    var h = log('Hello');
    var util = {
        name: 'hello',
        log: function (msg) {
            return msg + _this.name;
        }
    };
    var util1 = {
        name: 'hello',
        log: function (msg) {
            return msg + util1.name;
        }
    };
    //console.log(util1);
    console.log(util1.log('Test'));
})();
