import React from 'react'

const Department = () => {
  return (
    <div>
      <section id="departments" class="departments">
    <div class="container">

      <div class="section-title">
        <h2>Departments</h2>
      </div>

      <div class="row">
        <div class="col-lg-3">
          <ul class="nav nav-tabs flex-column">
            <li class="nav-item">
              <a class="nav-link active show" data-bs-toggle="tab" href="#tab-1">E.N.T</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#tab-2">Cancer</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#tab-3">Physiotherapy</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#tab-4">Dental</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" data-bs-toggle="tab" href="#tab-5">Neurosurgery</a>
            </li>
          </ul>
        </div>
        <div class="col-lg-9 mt-4 mt-lg-0">
          <div class="tab-content">
            <div class="tab-pane active show" id="tab-1">
              <div class="row">
                <div class="col-lg-8 details order-2 order-lg-1">
                  <h3>E.N.T</h3>
                  <p class="fst-italic">Vestibulum volutpat luctus quam sed finibus. Sed luctus odio eget ex posuere
                    hendrerit. Donec iaculis nisi ut purus dapibus</p>
                  <p>Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit,
                    tincidunt neque non, ullamcorper erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                    tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac neque.</p>
                </div>
                <div class="col-lg-4 text-center order-1 order-lg-2">
                  <img src="../assets/img/departments-1.jpg" alt="" class="img-fluid"/>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="tab-2">
              <div class="row">
                <div class="col-lg-8 details order-2 order-lg-1">
                  <h3>Cancer</h3>
                  <p class="fst-italic">Quisque sapien ipsum, efficitur ac dui et, fringilla viverra tellus. Proin urna
                    augue, posuere ut pellentesque quis, cursus ac neque.</p>
                  <p>Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit,
                    tincidunt neque non, ullamcorper erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                    tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac neque.</p>
                </div>
                <div class="col-lg-4 text-center order-1 order-lg-2">
                  <img src="../assets/img/departments-2.jpg" alt="" class="img-fluid"/>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="tab-3">
              <div class="row">
                <div class="col-lg-8 details order-2 order-lg-1">
                  <h3>Physiotherapy</h3>
                  <p class="fst-italic">Fusce placerat ornare enim sed varius. Mauris tortor diam, molestie eget
                    vulputate a, facilisis quis nibh. Donec blandit efficitur nulla</p>
                  <p>Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit,
                    tincidunt neque non, ullamcorper erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                    tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac neque.</p>
                </div>
                <div class="col-lg-4 text-center order-1 order-lg-2">
                  <img src="../assets/img/departments-3.jpg" alt="" class="img-fluid"/>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="tab-4">
              <div class="row">
                <div class="col-lg-8 details order-2 order-lg-1">
                  <h3>Dental</h3>
                  <p class="fst-italic"> sollicitudin sed est. Vestibulum volutpat luctus quam sed finibus. Sed luctus
                    odio eget ex posuere hendrerit. Donec iaculis nisi ut purus.</p>
                  <p>Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit,
                    tincidunt neque non, ullamcorper erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                    tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac neque.</p>
                </div>
                <div class="col-lg-4 text-center order-1 order-lg-2">
                  <img src="../assets/img/departments-4.jpg" alt="" class="img-fluid"/>
                </div>
              </div>
            </div>
            <div class="tab-pane" id="tab-5">
              <div class="row">
                <div class="col-lg-8 details order-2 order-lg-1">
                  <h3>Neurosurgery</h3>
                  <p class="fst-italic">Aliquam sed convallis libero. Proin in mi tempor, convallis lectus sed,
                    convallis mauris. Quisque ac nulla et lorem ultricies vulputate.</p>
                  <p>Vivamus nisi mauris, blandit quis sem sit amet, posuere blandit diam. Cras quis quam suscipit,
                    tincidunt neque non, ullamcorper erat. Quisque sapien ipsum, efficitur ac dui et, fringilla viverra
                    tellus. Proin urna augue, posuere ut pellentesque quis, cursus ac neque.</p>
                </div>
                <div class="col-lg-4 text-center order-1 order-lg-2">
                  <img src="../assets/img/departments-5.jpg" alt="" class="img-fluid"/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
    </div>
  )
}

export default Department