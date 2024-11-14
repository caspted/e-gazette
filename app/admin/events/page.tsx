import Layout from "@/components/admin/Layout";
import InputEvent from "@/components/admin/InputEvent";

export default function AdminEvents() {
  return (
    <Layout>
      <div className="flex justify-center py-3">
        <div className="w-1/2 px-10 bg-white shadow-xl">
          <InputEvent/>
        </div>
      </div>
    </Layout>
  )
}

