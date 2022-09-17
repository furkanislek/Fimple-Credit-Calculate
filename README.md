# Kredi Hesaplama Tablosu

## Projeye İlk Bakış

Merhaba, ben Furkan Akif İŞLEK. Öncelikle bu benim ilk practicum heyecanım. Bunun için sizlere teşekkür ederim. İlk olmasına rağmen ortaya çıkardığım projeden onur duyduğumu da belirtmek isterim. 
<br/><br/>
Beni bu projede en çok zorlayan olay bankacılık kavramlarına ve formüllerine uzak olmam oldu. React çok severek kullandığım her gün yeni bilgiler edindiğim bir kütüphanedir. Projemde 2 defa useContext kullandım. Projem çok dinamik bir yapıya sahip oldu. Umarım beğenirsiniz. 


### Anasayfa
![image](https://user-images.githubusercontent.com/76527169/190879398-54ada9f5-e94f-454a-b5a1-ff3f9c8380e3.png)

Burada projeye girdiğinizde karşınıza gelen ekranı görüyorsunuz. 

### Veriler Sonrası Kredi Özet Tablosu

![image](https://user-images.githubusercontent.com/76527169/190879429-99751425-de59-4c0e-96b8-4f2da7ec4e6a.png)

Burada verileri girdikten sonra ortaya çıkan kredi özet tablosunu görüyorsunuz. Bu tablo ile beraber "Ödeme Planını Göster" butonu çıkmaktadır. Bu buton detaylı kredi özeti popup'ını açacaktır. Kredi özet tablosunda dikkatinizi çekmek istediğim bir farklı yer ise useRef kullarak yaptığım "Taksit Tutarı" isimlendirmesi oldu. Mesela aylık ödeme seçtiğinizde "Aylık Taksit Tutarı", haftalık seçtiğinizde "Haftalık Taksit Tutarı" yazmaktadır. Ayrıca kredi özet tablosu için useContext Hook'u kullandım.

### Ödeme Planı Tablosu

![image](https://user-images.githubusercontent.com/76527169/190879487-948d6e29-1e1d-4658-9106-8659ed414c3f.png)

Burada useContext Hooku ile çektiğim ve for ile döndürüp array içine aldığım değerleri map ile tabloya yazdırarak sonucu elde ettim. 


