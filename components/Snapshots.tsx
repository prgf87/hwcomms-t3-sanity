/* eslint-disable @next/next/no-img-element */
'use client';

function Snapshots() {
  return (
    <section className="bg-gradient-invert">
      <div className="snapshot grid grid-cols-3 max-w-7xl mx-auto gap-5  text-gray-200 text-center p-10">
        <h1 className="col-span-3 mx-auto py-10 text-7xl">Snapshots</h1>
        <section className="diagonal">
          <div className="wrapper">
            <img src="/images/img27.png" alt="/" />
            <h2 className="section-title">Experienced Communicator</h2>
            <p>
              15 years of corporate communications experience with a focus on
              crisis and internal communications.
            </p>
          </div>
        </section>
        <section className="diagonal2">
          <div className="wrapper">
            <img src="/images/img12.png" alt="/" />
            <h2 className="section-title">Writer, Editor, and Producer</h2>
            <p>
              I create fun and inspiring content that shapes a corporate image
              and drives a positive narrative.
            </p>
          </div>
        </section>
        <section className="diagonal3">
          <div className="wrapper">
            <img src="/images/img26.png" alt="/" />
            <h2 className="section-title">Brain Nerd</h2>
            <p>
              My approach of blending brain science and empathy practices to
              create communications strategies has been proven on the frontlines
              of wildfires to control room floors of nuclear power plants.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}

export default Snapshots;
