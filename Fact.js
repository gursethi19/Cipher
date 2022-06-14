function nC2(n, x)
{
return factorial(n) / (factorial(x) * factorial(n - x));
}

function factorial(n)
{
var ans = 1;
for (var i = 2; i <= n; i++)
ans = ans * i;
return ans;
}


var n = 8;
console.log(nC2(n, 2));