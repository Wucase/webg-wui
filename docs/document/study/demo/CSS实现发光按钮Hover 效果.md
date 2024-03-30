# CSS实现发光按钮Hover 效果



> **demo**

<div class="container-box">
  <a href="https://www.webqdkf.com/HTML/" style="--clr:#fff"><span>HTML/CSS </span><i></i></a>
  <a href="https://www.webqdkf.com/JS/" style="--clr:#6eff3e"><span>JavaScript</span><i></i></a>

</div>

<style lang="scss">

.container-box 
{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background: #27282c;
  flex-direction: column;
  gap: 40px
}
.container-box a
{
  position: relative;
  background: #444;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5em;
  letter-spacing: 0.1em;
  font-weight: 400;
  padding: 10px 30px;
  transition: 0.5s;
}
.container-box a:hover 
{
  background: var(--clr);
  color: var(--clr);
  letter-spacing: 0.25em;
  box-shadow: 0 0 35px var(--clr);
}
.container-box a:before 
{
  content: '';
  position: absolute;
  inset: 2px;
  background: #27282c;
}
.container-box span 
{
  position: relative;
  z-index: 1;
}
.container-box i 
{
  position: absolute;
  inset: 0;
  display: block;
}
.container-box i::before 
{
  content: '';
  position: absolute;
  top: -2.2px;
  left: 80%;
  width: 12px;
  height: 6px;
  background: #27282c;
  transform: translateX(-50%);
  border: 2px solid var(--clr);
  transition: 0.5s;
}
.container-box a:hover i::before 
{
  width: 20px;
  left: 20%;
}
.container-box i::after 
{
  content: '';
  position: absolute;
  bottom: -1.5px;
  left: 20%;
  width: 12px;
  height: 6px;
  background: #27282c;
  transform: translateX(-50%);
  border: 2px solid var(--clr);
  transition: 0.5s;
}
.container-box a:hover i::after 
{
  width: 20px;
  left: 80%;
}
</style>

> **demo代码**

```html
<div class="container-box">
  <a href="https://www.webqdkf.com/HTML/" style="--clr:#fff"><span>HTML/CSS </span><i></i></a>
  <a href="https://www.webqdkf.com/JS/" style="--clr:#6eff3e"><span>JavaScript</span><i></i></a>

</div>

<style lang="scss">

.container-box 
{
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 400px;
  background: #27282c;
  flex-direction: column;
  gap: 40px
}
.container-box a
{
  position: relative;
  background: #444;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1.5em;
  letter-spacing: 0.1em;
  font-weight: 400;
  padding: 10px 30px;
  transition: 0.5s;
}
.container-box a:hover 
{
  background: var(--clr);
  color: var(--clr);
  letter-spacing: 0.25em;
  box-shadow: 0 0 35px var(--clr);
}
.container-box a:before 
{
  content: '';
  position: absolute;
  inset: 2px;
  background: #27282c;
}
.container-box span 
{
  position: relative;
  z-index: 1;
}
.container-box i 
{
  position: absolute;
  inset: 0;
  display: block;
}
.container-box i::before 
{
  content: '';
  position: absolute;
  top: -2.2px;
  left: 80%;
  width: 12px;
  height: 6px;
  background: #27282c;
  transform: translateX(-50%);
  border: 2px solid var(--clr);
  transition: 0.5s;
}
.container-box a:hover i::before 
{
  width: 20px;
  left: 20%;
}
.container-box i::after 
{
  content: '';
  position: absolute;
  bottom: -1.5px;
  left: 20%;
  width: 12px;
  height: 6px;
  background: #27282c;
  transform: translateX(-50%);
  border: 2px solid var(--clr);
  transition: 0.5s;
}
.container-box a:hover i::after 
{
  width: 20px;
  left: 80%;
}
</style>
```