import{a as Te,b as Be,c as Ue}from"./chunk-DIQQZIJJ.js";import{a as ue}from"./chunk-DGZVRRAW.js";import{a as xe}from"./chunk-CE4BNKUB.js";import{a as Pe,b as ke,c as Ge,j as je}from"./chunk-BNBULCHM.js";import{A as S,Aa as v,B as Fe,Ba as we,C as ie,Ca as Ie,D as u,Ea as le,G as ne,Ia as Se,J as B,L as N,M as O,Q as p,R as l,V as x,Va as Ne,Wa as Oe,Z as g,a as f,b as C,ba as U,da as D,g as De,ga as re,ha as oe,ia as se,ja as m,k as be,ka as c,l as Ae,la as R,o as Me,p as Ee,qa as b,r as j,s as A,t as T,u as ee,v as V,w as te,wa as y,xa as ae}from"./chunk-KJDUKPVH.js";var Ke=(()=>{let e=class e{constructor(t,r){this._renderer=t,this._elementRef=r,this.onChange=o=>{},this.onTouched=()=>{}}setProperty(t,r){this._renderer.setProperty(this._elementRef.nativeElement,t,r)}registerOnTouched(t){this.onTouched=t}registerOnChange(t){this.onChange=t}setDisabledState(t){this.setProperty("disabled",t)}};e.\u0275fac=function(r){return new(r||e)(l(x),l(N))},e.\u0275dir=u({type:e});let i=e;return i})(),fe=(()=>{let e=class e extends Ke{};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=B(e)))(o||e)}})(),e.\u0275dir=u({type:e,features:[g]});let i=e;return i})(),Y=new V("");var wt={provide:Y,useExisting:A(()=>K),multi:!0};function It(){let i=le()?le().getUserAgent():"";return/android (\d+)/.test(i.toLowerCase())}var St=new V(""),K=(()=>{let e=class e extends Ke{constructor(t,r,o){super(t,r),this._compositionMode=o,this._composing=!1,this._compositionMode==null&&(this._compositionMode=!It())}writeValue(t){let r=t??"";this.setProperty("value",r)}_handleInput(t){(!this._compositionMode||this._compositionMode&&!this._composing)&&this.onChange(t)}_compositionStart(){this._composing=!0}_compositionEnd(t){this._composing=!1,this._compositionMode&&this.onChange(t)}};e.\u0275fac=function(r){return new(r||e)(l(x),l(N),l(St,8))},e.\u0275dir=u({type:e,selectors:[["input","formControlName","",3,"type","checkbox"],["textarea","formControlName",""],["input","formControl","",3,"type","checkbox"],["textarea","formControl",""],["input","ngModel","",3,"type","checkbox"],["textarea","ngModel",""],["","ngDefaultControl",""]],hostBindings:function(r,o){r&1&&b("input",function(a){return o._handleInput(a.target.value)})("blur",function(){return o.onTouched()})("compositionstart",function(){return o._compositionStart()})("compositionend",function(a){return o._compositionEnd(a.target.value)})},features:[v([wt]),g]});let i=e;return i})();function _(i){return i==null||(typeof i=="string"||Array.isArray(i))&&i.length===0}function Je(i){return i!=null&&typeof i.length=="number"}var Qe=new V(""),et=new V(""),Nt=/^(?=.{1,254}$)(?=.{1,64}@)[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-zA-Z0-9!#$%&'*+/=?^_`{|}~-]+)*@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,E=class{static min(e){return Ot(e)}static max(e){return xt(e)}static required(e){return Pt(e)}static requiredTrue(e){return kt(e)}static email(e){return Gt(e)}static minLength(e){return jt(e)}static maxLength(e){return Tt(e)}static pattern(e){return Bt(e)}static nullValidator(e){return tt(e)}static compose(e){return at(e)}static composeAsync(e){return ut(e)}};function Ot(i){return e=>{if(_(e.value)||_(i))return null;let n=parseFloat(e.value);return!isNaN(n)&&n<i?{min:{min:i,actual:e.value}}:null}}function xt(i){return e=>{if(_(e.value)||_(i))return null;let n=parseFloat(e.value);return!isNaN(n)&&n>i?{max:{max:i,actual:e.value}}:null}}function Pt(i){return _(i.value)?{required:!0}:null}function kt(i){return i.value===!0?null:{required:!0}}function Gt(i){return _(i.value)||Nt.test(i.value)?null:{email:!0}}function jt(i){return e=>_(e.value)||!Je(e.value)?null:e.value.length<i?{minlength:{requiredLength:i,actualLength:e.value.length}}:null}function Tt(i){return e=>Je(e.value)&&e.value.length>i?{maxlength:{requiredLength:i,actualLength:e.value.length}}:null}function Bt(i){if(!i)return tt;let e,n;return typeof i=="string"?(n="",i.charAt(0)!=="^"&&(n+="^"),n+=i,i.charAt(i.length-1)!=="$"&&(n+="$"),e=new RegExp(n)):(n=i.toString(),e=i),t=>{if(_(t.value))return null;let r=t.value;return e.test(r)?null:{pattern:{requiredPattern:n,actualValue:r}}}}function tt(i){return null}function it(i){return i!=null}function nt(i){return Ie(i)?De(i):i}function rt(i){let e={};return i.forEach(n=>{e=n!=null?f(f({},e),n):e}),Object.keys(e).length===0?null:e}function ot(i,e){return e.map(n=>n(i))}function Ut(i){return!i.validate}function st(i){return i.map(e=>Ut(e)?e:n=>e.validate(n))}function at(i){if(!i)return null;let e=i.filter(it);return e.length==0?null:function(n){return rt(ot(n,e))}}function lt(i){return i!=null?at(st(i)):null}function ut(i){if(!i)return null;let e=i.filter(it);return e.length==0?null:function(n){let t=ot(n,e).map(nt);return Ae(t).pipe(be(rt))}}function dt(i){return i!=null?ut(st(i)):null}function Re(i,e){return i===null?[e]:Array.isArray(i)?[...i,e]:[i,e]}function ct(i){return i._rawValidators}function ht(i){return i._rawAsyncValidators}function de(i){return i?Array.isArray(i)?i:[i]:[]}function $(i,e){return Array.isArray(i)?i.includes(e):i===e}function He(i,e){let n=de(e);return de(i).forEach(r=>{$(n,r)||n.push(r)}),n}function Le(i,e){return de(e).filter(n=>!$(i,n))}var W=class{constructor(){this._rawValidators=[],this._rawAsyncValidators=[],this._onDestroyCallbacks=[]}get value(){return this.control?this.control.value:null}get valid(){return this.control?this.control.valid:null}get invalid(){return this.control?this.control.invalid:null}get pending(){return this.control?this.control.pending:null}get disabled(){return this.control?this.control.disabled:null}get enabled(){return this.control?this.control.enabled:null}get errors(){return this.control?this.control.errors:null}get pristine(){return this.control?this.control.pristine:null}get dirty(){return this.control?this.control.dirty:null}get touched(){return this.control?this.control.touched:null}get status(){return this.control?this.control.status:null}get untouched(){return this.control?this.control.untouched:null}get statusChanges(){return this.control?this.control.statusChanges:null}get valueChanges(){return this.control?this.control.valueChanges:null}get path(){return null}_setValidators(e){this._rawValidators=e||[],this._composedValidatorFn=lt(this._rawValidators)}_setAsyncValidators(e){this._rawAsyncValidators=e||[],this._composedAsyncValidatorFn=dt(this._rawAsyncValidators)}get validator(){return this._composedValidatorFn||null}get asyncValidator(){return this._composedAsyncValidatorFn||null}_registerOnDestroy(e){this._onDestroyCallbacks.push(e)}_invokeOnDestroyCallbacks(){this._onDestroyCallbacks.forEach(e=>e()),this._onDestroyCallbacks=[]}reset(e=void 0){this.control&&this.control.reset(e)}hasError(e,n){return this.control?this.control.hasError(e,n):!1}getError(e,n){return this.control?this.control.getError(e,n):null}},F=class extends W{get formDirective(){return null}get path(){return null}},G=class extends W{constructor(){super(...arguments),this._parent=null,this.name=null,this.valueAccessor=null}},q=class{constructor(e){this._cd=e}get isTouched(){return!!this._cd?.control?.touched}get isUntouched(){return!!this._cd?.control?.untouched}get isPristine(){return!!this._cd?.control?.pristine}get isDirty(){return!!this._cd?.control?.dirty}get isValid(){return!!this._cd?.control?.valid}get isInvalid(){return!!this._cd?.control?.invalid}get isPending(){return!!this._cd?.control?.pending}get isSubmitted(){return!!this._cd?.submitted}},Rt={"[class.ng-untouched]":"isUntouched","[class.ng-touched]":"isTouched","[class.ng-pristine]":"isPristine","[class.ng-dirty]":"isDirty","[class.ng-valid]":"isValid","[class.ng-invalid]":"isInvalid","[class.ng-pending]":"isPending"},ki=C(f({},Rt),{"[class.ng-submitted]":"isSubmitted"}),ft=(()=>{let e=class e extends q{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(l(G,2))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""],["","ngModel",""],["","formControl",""]],hostVars:14,hostBindings:function(r,o){r&2&&D("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)},features:[g]});let i=e;return i})(),pt=(()=>{let e=class e extends q{constructor(t){super(t)}};e.\u0275fac=function(r){return new(r||e)(l(F,10))},e.\u0275dir=u({type:e,selectors:[["","formGroupName",""],["","formArrayName",""],["","ngModelGroup",""],["","formGroup",""],["form",3,"ngNoForm",""],["","ngForm",""]],hostVars:16,hostBindings:function(r,o){r&2&&D("ng-untouched",o.isUntouched)("ng-touched",o.isTouched)("ng-pristine",o.isPristine)("ng-dirty",o.isDirty)("ng-valid",o.isValid)("ng-invalid",o.isInvalid)("ng-pending",o.isPending)("ng-submitted",o.isSubmitted)},features:[g]});let i=e;return i})();var P="VALID",H="INVALID",M="PENDING",k="DISABLED";function pe(i){return(J(i)?i.validators:i)||null}function Ht(i){return Array.isArray(i)?lt(i):i||null}function ge(i,e){return(J(e)?e.asyncValidators:i)||null}function Lt(i){return Array.isArray(i)?dt(i):i||null}function J(i){return i!=null&&!Array.isArray(i)&&typeof i=="object"}function gt(i,e,n){let t=i.controls;if(!(e?Object.keys(t):t).length)throw new j(1e3,"");if(!t[n])throw new j(1001,"")}function mt(i,e,n){i._forEachChild((t,r)=>{if(n[r]===void 0)throw new j(1002,"")})}var w=class{constructor(e,n){this._pendingDirty=!1,this._hasOwnPendingAsyncValidator=!1,this._pendingTouched=!1,this._onCollectionChange=()=>{},this._parent=null,this.pristine=!0,this.touched=!1,this._onDisabledChange=[],this._assignValidators(e),this._assignAsyncValidators(n)}get validator(){return this._composedValidatorFn}set validator(e){this._rawValidators=this._composedValidatorFn=e}get asyncValidator(){return this._composedAsyncValidatorFn}set asyncValidator(e){this._rawAsyncValidators=this._composedAsyncValidatorFn=e}get parent(){return this._parent}get valid(){return this.status===P}get invalid(){return this.status===H}get pending(){return this.status==M}get disabled(){return this.status===k}get enabled(){return this.status!==k}get dirty(){return!this.pristine}get untouched(){return!this.touched}get updateOn(){return this._updateOn?this._updateOn:this.parent?this.parent.updateOn:"change"}setValidators(e){this._assignValidators(e)}setAsyncValidators(e){this._assignAsyncValidators(e)}addValidators(e){this.setValidators(He(e,this._rawValidators))}addAsyncValidators(e){this.setAsyncValidators(He(e,this._rawAsyncValidators))}removeValidators(e){this.setValidators(Le(e,this._rawValidators))}removeAsyncValidators(e){this.setAsyncValidators(Le(e,this._rawAsyncValidators))}hasValidator(e){return $(this._rawValidators,e)}hasAsyncValidator(e){return $(this._rawAsyncValidators,e)}clearValidators(){this.validator=null}clearAsyncValidators(){this.asyncValidator=null}markAsTouched(e={}){this.touched=!0,this._parent&&!e.onlySelf&&this._parent.markAsTouched(e)}markAllAsTouched(){this.markAsTouched({onlySelf:!0}),this._forEachChild(e=>e.markAllAsTouched())}markAsUntouched(e={}){this.touched=!1,this._pendingTouched=!1,this._forEachChild(n=>{n.markAsUntouched({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}markAsDirty(e={}){this.pristine=!1,this._parent&&!e.onlySelf&&this._parent.markAsDirty(e)}markAsPristine(e={}){this.pristine=!0,this._pendingDirty=!1,this._forEachChild(n=>{n.markAsPristine({onlySelf:!0})}),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}markAsPending(e={}){this.status=M,e.emitEvent!==!1&&this.statusChanges.emit(this.status),this._parent&&!e.onlySelf&&this._parent.markAsPending(e)}disable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=k,this.errors=null,this._forEachChild(t=>{t.disable(C(f({},e),{onlySelf:!0}))}),this._updateValue(),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._updateAncestors(C(f({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(t=>t(!0))}enable(e={}){let n=this._parentMarkedDirty(e.onlySelf);this.status=P,this._forEachChild(t=>{t.enable(C(f({},e),{onlySelf:!0}))}),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent}),this._updateAncestors(C(f({},e),{skipPristineCheck:n})),this._onDisabledChange.forEach(t=>t(!1))}_updateAncestors(e){this._parent&&!e.onlySelf&&(this._parent.updateValueAndValidity(e),e.skipPristineCheck||this._parent._updatePristine(),this._parent._updateTouched())}setParent(e){this._parent=e}getRawValue(){return this.value}updateValueAndValidity(e={}){this._setInitialStatus(),this._updateValue(),this.enabled&&(this._cancelExistingSubscription(),this.errors=this._runValidator(),this.status=this._calculateStatus(),(this.status===P||this.status===M)&&this._runAsyncValidator(e.emitEvent)),e.emitEvent!==!1&&(this.valueChanges.emit(this.value),this.statusChanges.emit(this.status)),this._parent&&!e.onlySelf&&this._parent.updateValueAndValidity(e)}_updateTreeValidity(e={emitEvent:!0}){this._forEachChild(n=>n._updateTreeValidity(e)),this.updateValueAndValidity({onlySelf:!0,emitEvent:e.emitEvent})}_setInitialStatus(){this.status=this._allControlsDisabled()?k:P}_runValidator(){return this.validator?this.validator(this):null}_runAsyncValidator(e){if(this.asyncValidator){this.status=M,this._hasOwnPendingAsyncValidator=!0;let n=nt(this.asyncValidator(this));this._asyncValidationSubscription=n.subscribe(t=>{this._hasOwnPendingAsyncValidator=!1,this.setErrors(t,{emitEvent:e})})}}_cancelExistingSubscription(){this._asyncValidationSubscription&&(this._asyncValidationSubscription.unsubscribe(),this._hasOwnPendingAsyncValidator=!1)}setErrors(e,n={}){this.errors=e,this._updateControlsErrors(n.emitEvent!==!1)}get(e){let n=e;return n==null||(Array.isArray(n)||(n=n.split(".")),n.length===0)?null:n.reduce((t,r)=>t&&t._find(r),this)}getError(e,n){let t=n?this.get(n):this;return t&&t.errors?t.errors[e]:null}hasError(e,n){return!!this.getError(e,n)}get root(){let e=this;for(;e._parent;)e=e._parent;return e}_updateControlsErrors(e){this.status=this._calculateStatus(),e&&this.statusChanges.emit(this.status),this._parent&&this._parent._updateControlsErrors(e)}_initObservables(){this.valueChanges=new O,this.statusChanges=new O}_calculateStatus(){return this._allControlsDisabled()?k:this.errors?H:this._hasOwnPendingAsyncValidator||this._anyControlsHaveStatus(M)?M:this._anyControlsHaveStatus(H)?H:P}_anyControlsHaveStatus(e){return this._anyControls(n=>n.status===e)}_anyControlsDirty(){return this._anyControls(e=>e.dirty)}_anyControlsTouched(){return this._anyControls(e=>e.touched)}_updatePristine(e={}){this.pristine=!this._anyControlsDirty(),this._parent&&!e.onlySelf&&this._parent._updatePristine(e)}_updateTouched(e={}){this.touched=this._anyControlsTouched(),this._parent&&!e.onlySelf&&this._parent._updateTouched(e)}_registerOnCollectionChange(e){this._onCollectionChange=e}_setUpdateStrategy(e){J(e)&&e.updateOn!=null&&(this._updateOn=e.updateOn)}_parentMarkedDirty(e){let n=this._parent&&this._parent.dirty;return!e&&!!n&&!this._parent._anyControlsDirty()}_find(e){return null}_assignValidators(e){this._rawValidators=Array.isArray(e)?e.slice():e,this._composedValidatorFn=Ht(this._rawValidators)}_assignAsyncValidators(e){this._rawAsyncValidators=Array.isArray(e)?e.slice():e,this._composedAsyncValidatorFn=Lt(this._rawAsyncValidators)}},z=class extends w{constructor(e,n,t){super(pe(n),ge(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}registerControl(e,n){return this.controls[e]?this.controls[e]:(this.controls[e]=n,n.setParent(this),n._registerOnCollectionChange(this._onCollectionChange),n)}addControl(e,n,t={}){this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}removeControl(e,n={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}setControl(e,n,t={}){this.controls[e]&&this.controls[e]._registerOnCollectionChange(()=>{}),delete this.controls[e],n&&this.registerControl(e,n),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}contains(e){return this.controls.hasOwnProperty(e)&&this.controls[e].enabled}setValue(e,n={}){mt(this,!0,e),Object.keys(e).forEach(t=>{gt(this,!0,t),this.controls[t].setValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(Object.keys(e).forEach(t=>{let r=this.controls[t];r&&r.patchValue(e[t],{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e={},n={}){this._forEachChild((t,r)=>{t.reset(e?e[r]:null,{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this._reduceChildren({},(e,n,t)=>(e[t]=n.getRawValue(),e))}_syncPendingControls(){let e=this._reduceChildren(!1,(n,t)=>t._syncPendingControls()?!0:n);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){Object.keys(this.controls).forEach(n=>{let t=this.controls[n];t&&e(t,n)})}_setUpControls(){this._forEachChild(e=>{e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)})}_updateValue(){this.value=this._reduceValue()}_anyControls(e){for(let[n,t]of Object.entries(this.controls))if(this.contains(n)&&e(t))return!0;return!1}_reduceValue(){let e={};return this._reduceChildren(e,(n,t,r)=>((t.enabled||this.disabled)&&(n[r]=t.value),n))}_reduceChildren(e,n){let t=e;return this._forEachChild((r,o)=>{t=n(t,r,o)}),t}_allControlsDisabled(){for(let e of Object.keys(this.controls))if(this.controls[e].enabled)return!1;return Object.keys(this.controls).length>0||this.disabled}_find(e){return this.controls.hasOwnProperty(e)?this.controls[e]:null}};var ce=class extends z{};var yt=new V("CallSetDisabledState",{providedIn:"root",factory:()=>me}),me="always";function $t(i,e){return[...e.path,i]}function $e(i,e,n=me){ye(i,e),e.valueAccessor.writeValue(i.value),(i.disabled||n==="always")&&e.valueAccessor.setDisabledState?.(i.disabled),qt(i,e),Zt(i,e),zt(i,e),Wt(i,e)}function We(i,e,n=!0){let t=()=>{};e.valueAccessor&&(e.valueAccessor.registerOnChange(t),e.valueAccessor.registerOnTouched(t)),X(i,e),i&&(e._invokeOnDestroyCallbacks(),i._registerOnCollectionChange(()=>{}))}function Z(i,e){i.forEach(n=>{n.registerOnValidatorChange&&n.registerOnValidatorChange(e)})}function Wt(i,e){if(e.valueAccessor.setDisabledState){let n=t=>{e.valueAccessor.setDisabledState(t)};i.registerOnDisabledChange(n),e._registerOnDestroy(()=>{i._unregisterOnDisabledChange(n)})}}function ye(i,e){let n=ct(i);e.validator!==null?i.setValidators(Re(n,e.validator)):typeof n=="function"&&i.setValidators([n]);let t=ht(i);e.asyncValidator!==null?i.setAsyncValidators(Re(t,e.asyncValidator)):typeof t=="function"&&i.setAsyncValidators([t]);let r=()=>i.updateValueAndValidity();Z(e._rawValidators,r),Z(e._rawAsyncValidators,r)}function X(i,e){let n=!1;if(i!==null){if(e.validator!==null){let r=ct(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.validator);o.length!==r.length&&(n=!0,i.setValidators(o))}}if(e.asyncValidator!==null){let r=ht(i);if(Array.isArray(r)&&r.length>0){let o=r.filter(s=>s!==e.asyncValidator);o.length!==r.length&&(n=!0,i.setAsyncValidators(o))}}}let t=()=>{};return Z(e._rawValidators,t),Z(e._rawAsyncValidators,t),n}function qt(i,e){e.valueAccessor.registerOnChange(n=>{i._pendingValue=n,i._pendingChange=!0,i._pendingDirty=!0,i.updateOn==="change"&&vt(i,e)})}function zt(i,e){e.valueAccessor.registerOnTouched(()=>{i._pendingTouched=!0,i.updateOn==="blur"&&i._pendingChange&&vt(i,e),i.updateOn!=="submit"&&i.markAsTouched()})}function vt(i,e){i._pendingDirty&&i.markAsDirty(),i.setValue(i._pendingValue,{emitModelToViewChange:!1}),e.viewToModelUpdate(i._pendingValue),i._pendingChange=!1}function Zt(i,e){let n=(t,r)=>{e.valueAccessor.writeValue(t),r&&e.viewToModelUpdate(t)};i.registerOnChange(n),e._registerOnDestroy(()=>{i._unregisterOnChange(n)})}function Xt(i,e){i==null,ye(i,e)}function Yt(i,e){return X(i,e)}function Kt(i,e){if(!i.hasOwnProperty("model"))return!1;let n=i.model;return n.isFirstChange()?!0:!Object.is(e,n.currentValue)}function Jt(i){return Object.getPrototypeOf(i.constructor)===fe}function Qt(i,e){i._syncPendingControls(),e.forEach(n=>{let t=n.control;t.updateOn==="submit"&&t._pendingChange&&(n.viewToModelUpdate(t._pendingValue),t._pendingChange=!1)})}function ei(i,e){if(!e)return null;Array.isArray(e);let n,t,r;return e.forEach(o=>{o.constructor===K?n=o:Jt(o)?t=o:r=o}),r||t||n||null}function ti(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}function qe(i,e){let n=i.indexOf(e);n>-1&&i.splice(n,1)}function ze(i){return typeof i=="object"&&i!==null&&Object.keys(i).length===2&&"value"in i&&"disabled"in i}var L=class extends w{constructor(e=null,n,t){super(pe(n),ge(t,n)),this.defaultValue=null,this._onChange=[],this._pendingChange=!1,this._applyFormState(e),this._setUpdateStrategy(n),this._initObservables(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator}),J(n)&&(n.nonNullable||n.initialValueIsDefault)&&(ze(e)?this.defaultValue=e.value:this.defaultValue=e)}setValue(e,n={}){this.value=this._pendingValue=e,this._onChange.length&&n.emitModelToViewChange!==!1&&this._onChange.forEach(t=>t(this.value,n.emitViewToModelChange!==!1)),this.updateValueAndValidity(n)}patchValue(e,n={}){this.setValue(e,n)}reset(e=this.defaultValue,n={}){this._applyFormState(e),this.markAsPristine(n),this.markAsUntouched(n),this.setValue(this.value,n),this._pendingChange=!1}_updateValue(){}_anyControls(e){return!1}_allControlsDisabled(){return this.disabled}registerOnChange(e){this._onChange.push(e)}_unregisterOnChange(e){qe(this._onChange,e)}registerOnDisabledChange(e){this._onDisabledChange.push(e)}_unregisterOnDisabledChange(e){qe(this._onDisabledChange,e)}_forEachChild(e){}_syncPendingControls(){return this.updateOn==="submit"&&(this._pendingDirty&&this.markAsDirty(),this._pendingTouched&&this.markAsTouched(),this._pendingChange)?(this.setValue(this._pendingValue,{onlySelf:!0,emitModelToViewChange:!1}),!0):!1}_applyFormState(e){ze(e)?(this.value=this._pendingValue=e.value,e.disabled?this.disable({onlySelf:!0,emitEvent:!1}):this.enable({onlySelf:!0,emitEvent:!1})):this.value=this._pendingValue=e}};var ii=i=>i instanceof L;var _t=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275dir=u({type:e,selectors:[["form",3,"ngNoForm","",3,"ngNativeValidate",""]],hostAttrs:["novalidate",""]});let i=e;return i})();var Ct=new V("");var ni={provide:F,useExisting:A(()=>ve)},ve=(()=>{let e=class e extends F{constructor(t,r,o){super(),this.callSetDisabledState=o,this.submitted=!1,this._onCollectionChange=()=>this._updateDomValue(),this.directives=[],this.form=null,this.ngSubmit=new O,this._setValidators(t),this._setAsyncValidators(r)}ngOnChanges(t){this._checkFormPresent(),t.hasOwnProperty("form")&&(this._updateValidators(),this._updateDomValue(),this._updateRegistrations(),this._oldForm=this.form)}ngOnDestroy(){this.form&&(X(this.form,this),this.form._onCollectionChange===this._onCollectionChange&&this.form._registerOnCollectionChange(()=>{}))}get formDirective(){return this}get control(){return this.form}get path(){return[]}addControl(t){let r=this.form.get(t.path);return $e(r,t,this.callSetDisabledState),r.updateValueAndValidity({emitEvent:!1}),this.directives.push(t),r}getControl(t){return this.form.get(t.path)}removeControl(t){We(t.control||null,t,!1),ti(this.directives,t)}addFormGroup(t){this._setUpFormContainer(t)}removeFormGroup(t){this._cleanUpFormContainer(t)}getFormGroup(t){return this.form.get(t.path)}addFormArray(t){this._setUpFormContainer(t)}removeFormArray(t){this._cleanUpFormContainer(t)}getFormArray(t){return this.form.get(t.path)}updateModel(t,r){this.form.get(t.path).setValue(r)}onSubmit(t){return this.submitted=!0,Qt(this.form,this.directives),this.ngSubmit.emit(t),t?.target?.method==="dialog"}onReset(){this.resetForm()}resetForm(t=void 0){this.form.reset(t),this.submitted=!1}_updateDomValue(){this.directives.forEach(t=>{let r=t.control,o=this.form.get(t.path);r!==o&&(We(r||null,t),ii(o)&&($e(o,t,this.callSetDisabledState),t.control=o))}),this.form._updateTreeValidity({emitEvent:!1})}_setUpFormContainer(t){let r=this.form.get(t.path);Xt(r,t),r.updateValueAndValidity({emitEvent:!1})}_cleanUpFormContainer(t){if(this.form){let r=this.form.get(t.path);r&&Yt(r,t)&&r.updateValueAndValidity({emitEvent:!1})}}_updateRegistrations(){this.form._registerOnCollectionChange(this._onCollectionChange),this._oldForm&&this._oldForm._registerOnCollectionChange(()=>{})}_updateValidators(){ye(this.form,this),this._oldForm&&X(this._oldForm,this)}_checkFormPresent(){this.form}};e.\u0275fac=function(r){return new(r||e)(l(Qe,10),l(et,10),l(yt,8))},e.\u0275dir=u({type:e,selectors:[["","formGroup",""]],hostBindings:function(r,o){r&1&&b("submit",function(a){return o.onSubmit(a)})("reset",function(){return o.onReset()})},inputs:{form:[S.None,"formGroup","form"]},outputs:{ngSubmit:"ngSubmit"},exportAs:["ngForm"],features:[v([ni]),g,ne]});let i=e;return i})();var ri={provide:G,useExisting:A(()=>_e)},_e=(()=>{let e=class e extends G{set isDisabled(t){}constructor(t,r,o,s,a){super(),this._ngModelWarningConfig=a,this._added=!1,this.name=null,this.update=new O,this._ngModelWarningSent=!1,this._parent=t,this._setValidators(r),this._setAsyncValidators(o),this.valueAccessor=ei(this,s)}ngOnChanges(t){this._added||this._setUpControl(),Kt(t,this.viewModel)&&(this.viewModel=this.model,this.formDirective.updateModel(this,this.model))}ngOnDestroy(){this.formDirective&&this.formDirective.removeControl(this)}viewToModelUpdate(t){this.viewModel=t,this.update.emit(t)}get path(){return $t(this.name==null?this.name:this.name.toString(),this._parent)}get formDirective(){return this._parent?this._parent.formDirective:null}_checkParentType(){}_setUpControl(){this._checkParentType(),this.control=this.formDirective.addControl(this),this._added=!0}};e._ngModelWarningSentOnce=!1,e.\u0275fac=function(r){return new(r||e)(l(F,13),l(Qe,10),l(et,10),l(Y,10),l(Ct,8))},e.\u0275dir=u({type:e,selectors:[["","formControlName",""]],inputs:{name:[S.None,"formControlName","name"],isDisabled:[S.None,"disabled","isDisabled"],model:[S.None,"ngModel","model"]},outputs:{update:"ngModelChange"},features:[v([ri]),g,ne]});let i=e;return i})(),oi={provide:Y,useExisting:A(()=>Q),multi:!0};function Vt(i,e){return i==null?`${e}`:(e&&typeof e=="object"&&(e="Object"),`${i}: ${e}`.slice(0,50))}function si(i){return i.split(":")[0]}var Q=(()=>{let e=class e extends fe{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let r=this._getOptionId(t),o=Vt(r,t);this.setProperty("value",o)}registerOnChange(t){this.onChange=r=>{this.value=this._getOptionValue(r),t(this.value)}}_registerOption(){return(this._idCounter++).toString()}_getOptionId(t){for(let r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r),t))return r;return null}_getOptionValue(t){let r=si(t);return this._optionMap.has(r)?this._optionMap.get(r):t}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=B(e)))(o||e)}})(),e.\u0275dir=u({type:e,selectors:[["select","formControlName","",3,"multiple",""],["select","formControl","",3,"multiple",""],["select","ngModel","",3,"multiple",""]],hostBindings:function(r,o){r&1&&b("change",function(a){return o.onChange(a.target.value)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},features:[v([oi]),g]});let i=e;return i})(),Dt=(()=>{let e=class e{constructor(t,r,o){this._element=t,this._renderer=r,this._select=o,this._select&&(this.id=this._select._registerOption())}set ngValue(t){this._select!=null&&(this._select._optionMap.set(this.id,t),this._setElementValue(Vt(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._setElementValue(t),this._select&&this._select.writeValue(this._select.value)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(r){return new(r||e)(l(N),l(x),l(Q,9))},e.\u0275dir=u({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let i=e;return i})(),ai={provide:Y,useExisting:A(()=>bt),multi:!0};function Ze(i,e){return i==null?`${e}`:(typeof e=="string"&&(e=`'${e}'`),e&&typeof e=="object"&&(e="Object"),`${i}: ${e}`.slice(0,50))}function li(i){return i.split(":")[0]}var bt=(()=>{let e=class e extends fe{constructor(){super(...arguments),this._optionMap=new Map,this._idCounter=0,this._compareWith=Object.is}set compareWith(t){this._compareWith=t}writeValue(t){this.value=t;let r;if(Array.isArray(t)){let o=t.map(s=>this._getOptionId(s));r=(s,a)=>{s._setSelected(o.indexOf(a.toString())>-1)}}else r=(o,s)=>{o._setSelected(!1)};this._optionMap.forEach(r)}registerOnChange(t){this.onChange=r=>{let o=[],s=r.selectedOptions;if(s!==void 0){let a=s;for(let d=0;d<a.length;d++){let h=a[d],I=this._getOptionValue(h.value);o.push(I)}}else{let a=r.options;for(let d=0;d<a.length;d++){let h=a[d];if(h.selected){let I=this._getOptionValue(h.value);o.push(I)}}}this.value=o,t(o)}}_registerOption(t){let r=(this._idCounter++).toString();return this._optionMap.set(r,t),r}_getOptionId(t){for(let r of this._optionMap.keys())if(this._compareWith(this._optionMap.get(r)._value,t))return r;return null}_getOptionValue(t){let r=li(t);return this._optionMap.has(r)?this._optionMap.get(r)._value:t}};e.\u0275fac=(()=>{let t;return function(o){return(t||(t=B(e)))(o||e)}})(),e.\u0275dir=u({type:e,selectors:[["select","multiple","","formControlName",""],["select","multiple","","formControl",""],["select","multiple","","ngModel",""]],hostBindings:function(r,o){r&1&&b("change",function(a){return o.onChange(a.target)})("blur",function(){return o.onTouched()})},inputs:{compareWith:"compareWith"},features:[v([ai]),g]});let i=e;return i})(),At=(()=>{let e=class e{constructor(t,r,o){this._element=t,this._renderer=r,this._select=o,this._select&&(this.id=this._select._registerOption(this))}set ngValue(t){this._select!=null&&(this._value=t,this._setElementValue(Ze(this.id,t)),this._select.writeValue(this._select.value))}set value(t){this._select?(this._value=t,this._setElementValue(Ze(this.id,t)),this._select.writeValue(this._select.value)):this._setElementValue(t)}_setElementValue(t){this._renderer.setProperty(this._element.nativeElement,"value",t)}_setSelected(t){this._renderer.setProperty(this._element.nativeElement,"selected",t)}ngOnDestroy(){this._select&&(this._select._optionMap.delete(this.id),this._select.writeValue(this._select.value))}};e.\u0275fac=function(r){return new(r||e)(l(N),l(x),l(bt,9))},e.\u0275dir=u({type:e,selectors:[["option"]],inputs:{ngValue:"ngValue",value:"value"}});let i=e;return i})();var ui=(()=>{let e=class e{};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=ie({type:e}),e.\u0275inj=ee({});let i=e;return i})(),he=class extends w{constructor(e,n,t){super(pe(n),ge(t,n)),this.controls=e,this._initObservables(),this._setUpdateStrategy(n),this._setUpControls(),this.updateValueAndValidity({onlySelf:!0,emitEvent:!!this.asyncValidator})}at(e){return this.controls[this._adjustIndex(e)]}push(e,n={}){this.controls.push(e),this._registerControl(e),this.updateValueAndValidity({emitEvent:n.emitEvent}),this._onCollectionChange()}insert(e,n,t={}){this.controls.splice(e,0,n),this._registerControl(n),this.updateValueAndValidity({emitEvent:t.emitEvent})}removeAt(e,n={}){let t=this._adjustIndex(e);t<0&&(t=0),this.controls[t]&&this.controls[t]._registerOnCollectionChange(()=>{}),this.controls.splice(t,1),this.updateValueAndValidity({emitEvent:n.emitEvent})}setControl(e,n,t={}){let r=this._adjustIndex(e);r<0&&(r=0),this.controls[r]&&this.controls[r]._registerOnCollectionChange(()=>{}),this.controls.splice(r,1),n&&(this.controls.splice(r,0,n),this._registerControl(n)),this.updateValueAndValidity({emitEvent:t.emitEvent}),this._onCollectionChange()}get length(){return this.controls.length}setValue(e,n={}){mt(this,!1,e),e.forEach((t,r)=>{gt(this,!1,r),this.at(r).setValue(t,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n)}patchValue(e,n={}){e!=null&&(e.forEach((t,r)=>{this.at(r)&&this.at(r).patchValue(t,{onlySelf:!0,emitEvent:n.emitEvent})}),this.updateValueAndValidity(n))}reset(e=[],n={}){this._forEachChild((t,r)=>{t.reset(e[r],{onlySelf:!0,emitEvent:n.emitEvent})}),this._updatePristine(n),this._updateTouched(n),this.updateValueAndValidity(n)}getRawValue(){return this.controls.map(e=>e.getRawValue())}clear(e={}){this.controls.length<1||(this._forEachChild(n=>n._registerOnCollectionChange(()=>{})),this.controls.splice(0),this.updateValueAndValidity({emitEvent:e.emitEvent}))}_adjustIndex(e){return e<0?e+this.length:e}_syncPendingControls(){let e=this.controls.reduce((n,t)=>t._syncPendingControls()?!0:n,!1);return e&&this.updateValueAndValidity({onlySelf:!0}),e}_forEachChild(e){this.controls.forEach((n,t)=>{e(n,t)})}_updateValue(){this.value=this.controls.filter(e=>e.enabled||this.disabled).map(e=>e.value)}_anyControls(e){return this.controls.some(n=>n.enabled&&e(n))}_setUpControls(){this._forEachChild(e=>this._registerControl(e))}_allControlsDisabled(){for(let e of this.controls)if(e.enabled)return!1;return this.controls.length>0||this.disabled}_registerControl(e){e.setParent(this),e._registerOnCollectionChange(this._onCollectionChange)}_find(e){return this.at(e)??null}};function Xe(i){return!!i&&(i.asyncValidators!==void 0||i.validators!==void 0||i.updateOn!==void 0)}var Mt=(()=>{let e=class e{constructor(){this.useNonNullable=!1}get nonNullable(){let t=new e;return t.useNonNullable=!0,t}group(t,r=null){let o=this._reduceControls(t),s={};return Xe(r)?s=r:r!==null&&(s.validators=r.validator,s.asyncValidators=r.asyncValidator),new z(o,s)}record(t,r=null){let o=this._reduceControls(t);return new ce(o,r)}control(t,r,o){let s={};return this.useNonNullable?(Xe(r)?s=r:(s.validators=r,s.asyncValidators=o),new L(t,C(f({},s),{nonNullable:!0}))):new L(t,r,o)}array(t,r,o){let s=t.map(a=>this._createControl(a));return new he(s,r,o)}_reduceControls(t){let r={};return Object.keys(t).forEach(o=>{r[o]=this._createControl(t[o])}),r}_createControl(t){if(t instanceof L)return t;if(t instanceof w)return t;if(Array.isArray(t)){let r=t[0],o=t.length>1?t[1]:null,s=t.length>2?t[2]:null;return this.control(r,o,s)}else return this.control(t)}};e.\u0275fac=function(r){return new(r||e)},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();var Et=(()=>{let e=class e{static withConfig(t){return{ngModule:e,providers:[{provide:Ct,useValue:t.warnOnNgModelWithFormControl??"always"},{provide:yt,useValue:t.callSetDisabledState??me}]}}};e.\u0275fac=function(r){return new(r||e)},e.\u0275mod=ie({type:e}),e.\u0275inj=ee({imports:[ui]});let i=e;return i})();var Ce=function(i){return i.Easy="easy",i.Medium="medium",i.Hard="hard",i}(Ce||{});var Ve=function(i){return i.Boolean="boolean",i.Multiple="multiple",i}(Ve||{});var Ft=(()=>{let e=class e{constructor(t,r){this.http=t,this.tokenService=r,this.endpoint="/api.php?"}getAll(t,r){let o=ue.questionAmount.toString(),s=Ve.Multiple,a="base64",d=new URLSearchParams({amount:o,category:t,difficulty:r,type:s,encode:a});return this.tokenService.getToken().pipe(Ee(h=>{h&&d.append("token",h);let I=ue.apiUrl+this.endpoint+d.toString();return this.http.get(I)}))}};e.\u0275fac=function(r){return new(r||e)(te(Se),te(Be))},e.\u0275prov=T({token:e,factory:e.\u0275fac,providedIn:"root"});let i=e;return i})();function hi(i,e){if(i&1&&(m(0,"option",6),y(1),c()),i&2){let n=e.$implicit;U("value",n.id),p(),ae(n.name)}}function fi(i,e){if(i&1&&(m(0,"option",6),y(1),c()),i&2){let n=e.$implicit;U("value",n[1]),p(),ae(n[0])}}var tn=(()=>{let e=class e{constructor(t,r,o,s,a){this.router=t,this.formBuilder=r,this.questionService=o,this.gameService=s,this.loaderService=a}ngOnInit(){this.difficultyList=Object.entries(Ce),this.form=this.formBuilder.group({player:[null,E.required],category:["",E.required],difficulty:["",E.required]})}submit(t){if(t.preventDefault(),this.form.markAllAsTouched(),this.form.invalid)return;this.loaderService.setStatus(!0);let r=this.form.get("player")?.value,o=this.form.get("category")?.value,s=this.form.get("difficulty")?.value;this.questionService.getAll(o,s).pipe(Me(1)).subscribe({next:a=>{if(a.response_code!==Te.Success)return;let d=a.results,h=[];this.gameService.set({player:r,category:o,difficulty:s,questions:d,scores:h}),this.router.navigate(["question"],{skipLocationChange:!0})},error:a=>console.error(a),complete:()=>this.loaderService.setStatus(!1)})}};e.\u0275fac=function(r){return new(r||e)(l(Ne),l(Mt),l(Ft),l(xe),l(Ue))},e.\u0275cmp=Fe({type:e,selectors:[["app-settings"]],inputs:{categoryList:"categoryList"},standalone:!0,features:[v([],[Pe({heroPlay:je,heroArrowLeft:Ge})]),we],decls:21,vars:7,consts:[[1,"w-128","max-w-full","min-h-screen","mx-auto","flex","flex-col","items-center","justify-center","p-4"],[1,"text-center","text-2xl","font-bold","capitalize"],[1,"w-full","flex","flex-col","items-center","gap-4","mt-12",3,"submit","formGroup"],["type","text","name","player","placeholder","Player nick","formControlName","player",1,"input","input-bordered","input-primary","w-full"],["name","category","formControlName","category",1,"select","select-primary","w-full"],["value","","disabled","","selected",""],[3,"value"],["name","difficulty","formControlName","difficulty",1,"select","select-primary","w-full"],["type","submit",1,"btn","w-full","capitalize","btn-accent"],["size","21","name","heroPlay"],["type","button","routerLink","/","skipLocationChange","",1,"btn","btn-xs","btn-ghost","capitalize","mt-8"],["size","14","name","heroArrowLeft"]],template:function(r,o){r&1&&(m(0,"main",0)(1,"h1",1),y(2,"Game settings"),c(),m(3,"form",2),b("submit",function(a){return o.submit(a)}),R(4,"input",3),m(5,"select",4)(6,"option",5),y(7,"Choose category"),c(),oe(8,hi,2,2,"option",6,re),c(),m(10,"select",7)(11,"option",5),y(12,"Choose difficulty"),c(),oe(13,fi,2,2,"option",6,re),c(),m(15,"button",8),R(16,"ng-icon",9),y(17," Start "),c()(),m(18,"button",10),R(19,"ng-icon",11),y(20," Back "),c()()),r&2&&(p(3),U("formGroup",o.form),p(),D("input-error",o.form.get("player").invalid&&(o.form.get("player").touched||o.form.get("player").dirty)),p(),D("select-error",o.form.get("category").invalid&&(o.form.get("category").touched||o.form.get("category").dirty)),p(3),se(o.categoryList),p(2),D("select-error",o.form.get("difficulty").invalid&&(o.form.get("difficulty").touched||o.form.get("difficulty").dirty)),p(3),se(o.difficultyList))},dependencies:[Oe,Et,_t,Dt,At,K,Q,ft,pt,ve,_e,ke]});let i=e;return i})();export{tn as default};
