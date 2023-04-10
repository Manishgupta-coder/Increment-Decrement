function increment ( input )
{
    var count = Number( document.getElementById( 'count' ).innerText )
    count = count + input
    document.getElementById( 'count' ).innerText = count
}

function decrement ( input )
{
    var count = Number( document.getElementById( 'count' ).innerText )
    count = count - input
    document.getElementById( 'count' ).innerText = count
}

function incrementUser ()
{
    var input = Number( document.getElementById( 'increment1' ).value )
    increment( input )
}

function decrementUser ()
{
    var input = Number( document.getElementById( 'increment1' ).value )
    decrement( input )
}

function reset ()
{
    document.getElementById( 'count' ).innerText = 0
}