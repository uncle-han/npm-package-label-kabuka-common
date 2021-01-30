export function Random() {
    this.num = '1234567890';
    this.lower = 'qwertyuiopasdfghjklzxcvbnm';
    this.upper = 'QWERTYUIOPASDFGHJKLZXCVBNM'
    this.symbol = `~!@#$%^&*()_+{}:<>?,./l;[]-=！@#￥%……&*（）—+`

    Random.prototype.o2nine = function() {
        return parseInt(Math.random() * 10)
    }

    Random.prototype.nBitNum = function(n) {
        var num = '';
        for(var i = 0; i < n; i++) {
            num += this.o2nine()
        }
        return n > 0 ? num : 0
    }

}