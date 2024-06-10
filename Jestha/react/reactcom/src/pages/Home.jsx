import React from 'react'
import Layout from '../components/Layout'

const Home = () => {
  return (
    <>
    <Layout>
      {/* product starts */}
<section class="bg-white py-12 text-gray-700 sm:py-16 lg:py-20">
  <div class="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-md text-center">
      <h2 class="font-serif text-2xl font-bold sm:text-3xl">Fresh Fruits & Vegetables</h2>
    </div>

    <div class="mt-10 grid grid-cols-2 gap-6 sm:grid-cols-4 sm:gap-4 lg:mt-16">
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="https://images.unsplash.com/photo-1612144515333-e8b9db423782?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del> 
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button> 
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="https://images.unsplash.com/photo-1577069861033-55d04cec4ef5?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del>
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button>
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="https://images.unsplash.com/photo-1596035356896-dff99fc5d3d8?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del>
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button>
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/0RV9Zy3daoeMbDmTOOMKm.png" alt="" />
        </div>

        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del>
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button>
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="https://images.unsplash.com/photo-1582979512210-99b6a53386f9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </div>

        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del>
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button>
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/neZnfwBHi0f-4TivjA6BS.png" alt="" />
        </div>

        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del>
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button>
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/POklWwmmu0AtDZe5tNh9j.png" alt="" />
        </div>

        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del>
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button>
      </article>
      
      <article class="relative flex flex-col overflow-hidden rounded-lg border">
        <div class="aspect-square overflow-hidden">
          <img class="h-full w-full object-cover transition-all duration-300 group-hover:scale-125" src="/images/7ObHe1EuFqmsZmri6-ROD.png" alt="" />
        </div>
        <div class="absolute top-0 m-2 rounded-full bg-white">
          <p class="rounded-full bg-emerald-500 p-1 text-[8px] font-bold uppercase tracking-wide text-white sm:py-1 sm:px-3">Sale</p>
        </div>
        <div class="my-4 mx-auto flex w-10/12 flex-col items-start justify-between">
          <div class="mb-2 flex">
            <p class="mr-3 text-sm font-semibold">$99.00</p>
            <del class="text-xs text-gray-400"> $79.00 </del>
          </div>
          <h3 class="mb-2 text-sm text-gray-400">Fresh Apples</h3>
        </div>
        <button class="group mx-auto mb-2 flex h-10 w-10/12 items-stretch overflow-hidden rounded-md text-gray-600">
          <div class="flex w-full items-center justify-center bg-gray-100 text-xs uppercase transition group-hover:bg-emerald-600 group-hover:text-white">Add</div>
          <div class="flex items-center justify-center bg-gray-200 px-5 transition group-hover:bg-emerald-500 group-hover:text-white">+</div>
        </button>
      </article>
    </div>
  </div>
</section>
    </Layout>
    </>
  )
}

export default Home
