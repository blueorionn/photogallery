# PhotoGallery Project

My photo gallery project is built with Next.js and Supabase, offering a seamless way to browse and explore high-quality images. Supabase handles secure image storage and retrieval, while Next.js ensures a fast and smooth user experience with dynamic loading.

## Getting Started

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/blueorionn/photogallery.git
   cd photogallery
   ```

2. Install dependencies:

   ```bash
   npm install
   # or
   yarn install
   ```

3. Required environment variables:

   ```bash
   export NEXT_PRIVATE_SUPABASE_URL='your-supabase-database-url'
   export NEXT_PRIVATE_SUPABASE_ANON_KEY='your-supabase-anon-key'
   export NEXT_PRIVATE_SUPABASE_SERVICE_ROLE='your-supabase-service-key'
   export CLOUD_OBJECT_STORAGE_LOCATION='your-cloud-storage-url'
   export PROJECT_URL='your-project-url'
   ```

4. Start the development server:

   ```bash
   npm run dev
   # or
   yarn dev
   ```

## License

This project is licensed under the [MIT](https://github.com/blueorionn/photogallery/blob/master/LICENSE) License.
