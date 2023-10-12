import EditReport from "../../../../../components/Reports/EditReport";

export default function EditPostPage(params) {
    const { params: { id } } = params;
   
    return (
      <div>
        <head>
          <title>Edit Report | Granulax Report System</title>
          <meta name="description" content="Get the Latest Happenings in the world of Cybersecurity Blog - The Official Website of Secure Wolf"/>
        </head>
        <EditReport reportId={id}/>
      </div>
    )
}