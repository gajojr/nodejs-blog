import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kako radi nodejs?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Nodejs u pozadini
        </h1>

        <h2 className={styles.sectionTitle}>
          1. Sta je nodejs?
        </h2>
        <p className={styles.description}>
          Pre nodejs, javascript je bila koriscena samo na frontendu(browseru), a nodejs je omogucio da se javascript koristi i na lokalnoj masini, da se pristupa file sistemu i OS-u.
          Nodejs je js runtime napravljen pomocu Chromeovog V8 engina i libuv-a. V8 je googleov open source projekat. Njegova svrha je da kompajlira js u masiniski kod koji masina moze da izvrsi.
          Nodejs nije programski jezik vec runtime - okruzenje, u ovom slucaju jezika js, koji ima razne alate i funkcionalnosti. 
          Kada nodejs treba da izvrsi skriptu prosledjuje je u V8 engine koji koristi c++ da kompajlira u masinski kod.
          <br/>
          Funkcije kao sto su:
          <br/>
          &nbsp;- localStorage.getItem
          <br/>
          &nbsp;- document.querySelector
          <br/>
          <br/>
          nisu funkcije js, vec chrome runtimea, gde je c++ zaduzen za njihovo izvrsenje
          <br/>
          <br/>
          Isti je slucaj u nodejs-u:
          <br/>
          - fs.readFile
          <br/>
          - os.platform
          <br/>
          su funkcije napisane u c++
        </p>

        <h2 className={styles.sectionTitle}>
          2. Zasto koristiti nodejs?
        </h2>
        <p className={styles.description}>
          Nodejs je asinhroni(non-blocking), sto znaci da kada imamo vise stvari koje su nezavisne nodejs nece cekati da se izvrsi jedna po jedna vec ce u pozadini vrsiti vise radnji sto je pogodno 
          za rad na serveru, jer resava problem dugog cekanja pri komunikaciji za bazom podataka ili nekim api-om za razliku od sinhronog(blocking) okruzenja koje izvrsava jednu po jednu stvar. Osim toga nodejs je verovatno najbolja opcija sto se tice podrske, sve zbog sto koristi jedan od najpopularnijih jezika - javascript i zahvaljujuci package menadzeru npm, gde mozete preuzeti pakete koji resavaju veliki broj problema, sto znaci da necete morati da sve pisete sami, vec cete vecinu vremena provoditi u implementaciji vec gotovih paketa i "sklapacete" vasu aplikaciju sto vam omogucava da se fokusirate na finalni proizvod, radije nego na sam kod.
        </p>

        <h2 className={styles.sectionTitle}>
          3. libuv  
        </h2>
        <p className={styles.description}>
          Je takodje c++ open source projekat koji daje nodeu pristup file sistemu, os-u i networkingu. Libuv je 100% c++ kod, za razliku od V8 gde se koriste js i c++.
        </p>

        <h2 className={styles.sectionTitle}>
          4. Event loop  
        </h2>
        <p className={styles.description}>
          ---------------------------------------- napraviti dijagram za objasnjenje
          Node event loop je single threaded, sto znaci da radi na jednom threadu i zbog toga ne moze da se ikoristi pun performans ako ima vise threadova, ali neke od funkcija koje koristi node
          mogu da koriste vise threadova.
        </p>

        <h2 className={styles.sectionTitle}>
          5. Primene nodejs-a  
        </h2>
        <p className={styles.description}>
          Nodejs se uglavnom koristi za programiranje web aplikacija. Osim toga moze se koristiti za IOT(Internet of things) za programiranje mikrokontrolera, masinsko ucenje na serveru (Tensorflow.js)... Koriscen je u Netflixu, Linkedinu, Uberu, Paypalu, Nasi, Walmartu...
        </p>

        <h2 className={styles.sectionTitle}>
          6. Nodejs i baze podataka  
        </h2>
        <p className={styles.description}>
          Sto se tice nodea mozemo ga kombinovati sa SQL bazama(MYSQL, POSTGRESSQL..), noSQL bazama(MongoDB...), mozemo koristi Redis sa cacheiranje, cak se moze koristiti i sa grafickim bazama podataka kao sto su Neo4j. Najcesce se kombinuje sa MongoDB-em. 
        </p>
      </main>

      <footer className={styles.footer}>
        &copy;Andrija Gajic {new Date().getFullYear()}
      </footer>
    </div>
  )
}
