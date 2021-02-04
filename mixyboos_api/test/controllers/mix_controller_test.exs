defmodule MixyboosApi.MixControllerTest do
  use ExUnit.Case, async: false
  use Plug.Test
  alias MixyboosApi.Mix
  alias MixyboosApi.Repo
  alias Ecto.Adapters.SQL

  setup do
    SQL.Sandbox.mode(Repo, :manual)

    on_exit(fn ->
      SQL.rollback_test_transaction(Repo)
    end)
  end

  test "/index returns a list of mixes" do
    mixes_as_json =
      %Mix{title: "Mix 1", description: "Mix 1 Description"}
      |> Repo.insert
      |> List.wrap
      |> Poison.encode!

    response = conn(:get, "/api/mixes") |> send_request

    assert response.status == 200
    assert response.resp_body == mixes_as_json
  end

  defp send_request(conn) do
    conn
    |> put_private(:plug_skip_csrf_protection, true)
    |> MixyboosApi.Endpoint.call([])
  end
end
