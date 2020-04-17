import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RuleService {
  private baseUrl = 'http://localhost:8081/regle/red';
  private baseUrl1 = 'http://localhost:8081/regle/listrule';
  private baseUrlx='http://localhost:8081/regle/statx';
  private baseUrly='http://localhost:8081/regle/staty';
  private baseUrlz='http://localhost:8081/regle/statz';


  private baseUrlcalculRouting='http://localhost:8081/regle/calculRouting'
  private baseUrlcalculpreCalcul='http://localhost:8081/regle/calculpreCalcul';
  private baseUrlcalculParcours='http://localhost:8081/regle/calculParcours';



  private baseUrlstatroutingdelete='http://localhost:8081/regle/statroutingdelete'
  private baseUrlstatpreCalculdelete='http://localhost:8081/regle/statpreCalculdelete';
  private baseUrlstatParcoursdelete='http://localhost:8081/regle/statParcoursdelete';






  private baseUrlstatRoutingupdate='http://localhost:8081/regle/statroutingupdate'
  private baseUrlpreCalculupdate='http://localhost:8081/regle/statpreCalculupdate';
  private baseUrlParcoursupdate='http://localhost:8081/regle/statParcoursupdate';




  
  private baseUrljan='http://localhost:8081/regle/statjan';
  private baseUrlfev='http://localhost:8081/regle/statfev';
  private baseUrlmar='http://localhost:8081/regle/statmar';
  private baseUrlavr='http://localhost:8081/regle/statavr';
  private baseUrlmai='http://localhost:8081/regle/statmai';
  private baseUrljui='http://localhost:8081/regle/statjui';
  private baseUrljul='http://localhost:8081/regle/statjul';
  private baseUrlout='http://localhost:8081/regle/statout';
  private baseUrlsep='http://localhost:8081/regle/statsep';
  


  private baseUrlwhritejan='http://localhost:8081/regle/statwhritejan';
  private baseUrlwhritefev='http://localhost:8081/regle/statwhritefev';
  private baseUrlwhritemar='http://localhost:8081/regle/statwhritemar';
  private baseUrlwhriteavr='http://localhost:8081/regle/statwhriteavr';
  private baseUrlwhritemai='http://localhost:8081/regle/statwhritemai';
  private baseUrlwhritejui='http://localhost:8081/regle/statwhritejui';
  private baseUrlwhritejul='http://localhost:8081/regle/statwhritejul';
  private baseUrlwhriteout='http://localhost:8081/regle/statwhriteout';
  private baseUrlwhritesep='http://localhost:8081/regle/statwhritesep';





  private baseUrldeletejan='http://localhost:8081/regle/statdeletejan';
  private baseUrldeletefev='http://localhost:8081/regle/statdeletefev';
  private baseUrldeletemar='http://localhost:8081/regle/statdeletemar';
  private baseUrldeleteavr='http://localhost:8081/regle/statdeleteavr';
  private baseUrldeletemai='http://localhost:8081/regle/statdeletemai';
  private baseUrldeletejui='http://localhost:8081/regle/statdeletejui';
  private baseUrldeletejul='http://localhost:8081/regle/statdeletejul';
  private baseUrldeleteout='http://localhost:8081/regle/statdeleteout';
  private baseUrldeletesep='http://localhost:8081/regle/statdeletesep';




  private baseUrlupdatejan='http://localhost:8081/regle/statupdatejan';
  private baseUrlupdatefev='http://localhost:8081/regle/statupdatefev';
  private baseUrlupdatemar='http://localhost:8081/regle/statupdatemar';
  private baseUrlupdateavr='http://localhost:8081/regle/statupdateavr';
  private baseUrlupdatemai='http://localhost:8081/regle/statupdatemai';
  private baseUrlupdatejui='http://localhost:8081/regle/statupdatejui';
  private baseUrlupdatejul='http://localhost:8081/regle/statupdatejul';
  private baseUrlupdateout='http://localhost:8081/regle/statupdateout';
  private baseUrlupdatesep='http://localhost:8081/regle/statupdatesep';

  private Assistancecommerciale='http://localhost:8081/motif/Assistancecommerciale';
  private Activationweb='http://localhost:8081/motif/Activationweb';
  private Assurancemobile='http://localhost:8081/motif/Assurancemobile';
  private Desimlockage='http://localhost:8081/motif/Desimlockage';
  private Paiementfacture='http://localhost:8081/motif/Paiementfacture';
  private  Informationsurlaconsommation='http://localhost:8081/motif/Informationsurlaconsommation';
  private Choixintermédairenonvalide='http://localhost:8081/motif/Choixintermédairenonvalide';

  







  private headers = new Headers({'Content-Type':'application/json'});
  
  
  constructor(private http: HttpClient) { }

  getevent(): Observable<any> {
    return this.http.get(this.baseUrl1); 
  } 
  getconnect(): Observable<any> {
      return this.http.get(this.baseUrl); 
  }


  getx() : Observable<any> 
  {return this.http.get(this.baseUrlx);}
  gety() : Observable<any> 
  {return this.http.get(this.baseUrly);}
  getz() : Observable<any> 
  {return this.http.get(this.baseUrlz);}


  
  getjan() : Observable<any> 
  {return this.http.get(this.baseUrljan);}
  getfev() : Observable<any> 
  {return this.http.get(this.baseUrlfev);}
  getmar() : Observable<any> 
  {return this.http.get(this.baseUrlmar);}
  getavr() : Observable<any> 
  {return this.http.get(this.baseUrlavr);}
  getmai() : Observable<any> 
  {return this.http.get(this.baseUrlmai);}
  getjui() : Observable<any> 
  {return this.http.get(this.baseUrljui);}
  getjul() : Observable<any> 
  {return this.http.get(this.baseUrljul);}
  getout() : Observable<any> 
  {return this.http.get(this.baseUrlout);}
  getsep() : Observable<any> 
  {return this.http.get(this.baseUrlsep);}







  getwhritejan() : Observable<any> 
  {return this.http.get(this.baseUrlwhritejan);}
  getwhritefev() : Observable<any> 
  {return this.http.get(this.baseUrlwhritefev);}
  getwhritemar() : Observable<any> 
  {return this.http.get(this.baseUrlwhritemar);}
  getwhriteavr() : Observable<any> 
  {return this.http.get(this.baseUrlwhriteavr);}
  getwhritemai() : Observable<any> 
  {return this.http.get(this.baseUrlwhritemai);}
  getwhritejui() : Observable<any> 
  {return this.http.get(this.baseUrlwhritejui);}
  getwhritejul() : Observable<any> 
  {return this.http.get(this.baseUrlwhritejul);}
  getwhriteout() : Observable<any> 
  {return this.http.get(this.baseUrlwhriteout);}
  getwhritesep() : Observable<any> 
  {return this.http.get(this.baseUrlwhritesep);}







  getdeletejan() : Observable<any> 
  {return this.http.get(this.baseUrldeletejan);}
 getdeletefev() : Observable<any> 
  {return this.http.get(this.baseUrldeletefev);}
 getdeletemar() : Observable<any> 
  {return this.http.get(this.baseUrldeletemar);}
 getdeleteavr() : Observable<any> 
  {return this.http.get(this.baseUrldeleteavr);}
 getdeletemai() : Observable<any> 
  {return this.http.get(this.baseUrldeletemai);}
 getdeletejui() : Observable<any> 
  {return this.http.get(this.baseUrldeletejui);}
 getdeletejul() : Observable<any> 
  {return this.http.get(this.baseUrldeletejul);}
 getdeleteout() : Observable<any> 
  {return this.http.get(this.baseUrldeleteout);}
 getdeletesep() : Observable<any> 
  {return this.http.get(this.baseUrldeletesep);}






  getupdatejan() : Observable<any> 
  {return this.http.get(this.baseUrlupdatejan);}
 getupdatefev() : Observable<any> 
  {return this.http.get(this.baseUrlupdatefev);}
 getupdatemar() : Observable<any> 
  {return this.http.get(this.baseUrlupdatemar);}
 getupdateavr() : Observable<any> 
  {return this.http.get(this.baseUrlupdateavr);}
 getupdatemai() : Observable<any> 
  {return this.http.get(this.baseUrlupdatemai);}
 getupdatejui() : Observable<any> 
  {return this.http.get(this.baseUrlupdatejui);}
 getupdatejul() : Observable<any> 
  {return this.http.get(this.baseUrlupdatejul);}
 getupdateout() : Observable<any> 
  {return this.http.get(this.baseUrlupdateout);}
 getupdatesep() : Observable<any> 
  {return this.http.get(this.baseUrlupdatesep);}




  getcalculRouting():Observable<any>
  {return this.http.get(this.baseUrlcalculRouting)}
  getcalculpreCalcul():Observable<any>
  {return this.http.get(this.baseUrlcalculpreCalcul)}
  getcalculParcours():Observable<any>
  {return this.http.get(this.baseUrlcalculParcours)}


  getstatpreCalculdelete():Observable<any>
  {return this.http.get(this.baseUrlstatpreCalculdelete)}
  getstatroutingdelete():Observable<any>
  {return this.http.get(this.baseUrlstatroutingdelete)}
  getstatParcoursdelete():Observable<any>
  {return this.http.get(this.baseUrlstatParcoursdelete)}


  getstatpreCalculupdate():Observable<any>
  {return this.http.get(this.baseUrlpreCalculupdate)}
  getstatroutingupdate():Observable<any>
  {return this.http.get(this.baseUrlstatRoutingupdate)}
  getstatParcoursupdate():Observable<any>
  {return this.http.get(this.baseUrlParcoursupdate)}



  getAssistancecommerciale():Observable<any>
  {return this.http.get(this.Assistancecommerciale)}

  getActivationweb():Observable<any>
  {return this.http.get(this.Activationweb)}
  getAssurancemobile():Observable<any>
  {return this.http.get(this.Assurancemobile)}
  getDesimlockage():Observable<any>
  {return this.http.get(this.Desimlockage)}
  getPaiementfacture():Observable<any>
  {return this.http.get(this.Paiementfacture)}
  getInformationsurlaconsommation():Observable<any>
  {return this.http.get(this.Informationsurlaconsommation)}
  getChoixintermédairenonvalide():Observable<any>
  {return this.http.get(this.Choixintermédairenonvalide)}



}
