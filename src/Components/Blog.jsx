import {withRouter} from 'react-router-dom';

import React from 'react'

function Blog(props) {
        console.warn(props);
    return (


<div className="max-w-screen-lg mx-auto">
    
    <main className="mt-10">

      <div className="mb-4 md:mb-0 w-full mx-auto relative">
        <div className="px-4 lg:px-0">
          <h2 className="text-4xl font-semibold text-gray-200 leading-tight">
            {props.match.params.title}
          </h2>
        </div>

        <img src={props.match.params.media} className="w-full object-cover lg:rounded" style={{height: "28em"}} alt=""/>
      </div>

      <div className="flex flex-col lg:flex-row lg:space-x-12">

        <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
          <p className="pb-6">
              {props.summary}
          </p>

        </div>

       

      </div>
    </main>

   
  </div>
    )
}

export default withRouter(Blog);
