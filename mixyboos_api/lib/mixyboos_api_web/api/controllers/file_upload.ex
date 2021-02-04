defmodule MixyboosApiWeb.FileUploadController do
  use MixyboosApiWeb, :controller

  def file(conn, %{"upload" => upload}) do
    IO.inspect(upload.file, label: "File upload information")
    # TODO: you can copy the uploaded file now,
    #       because it gets deleted after this request
    json(conn, "Uploaded #{upload.file.filename} to a temporary directory")
  end
end
