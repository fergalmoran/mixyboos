defmodule MixyboosApi.Repo do
  use Ecto.Repo,
    otp_app: :mixyboos_api,
    adapter: Ecto.Adapters.Postgres
end
