defmodule MixyboosApi.Application do
  # See https://hexdocs.pm/elixir/Application.html
  # for more information on OTP Applications
  @moduledoc false

  use Application

  def start(_type, _args) do
    children = [
      # Start the Ecto repository
      MixyboosApi.Repo,
      # Start the Telemetry supervisor
      MixyboosApiWeb.Telemetry,
      # Start the PubSub system
      {Phoenix.PubSub, name: MixyboosApi.PubSub},
      # Start the Endpoint (http/https)
      MixyboosApiWeb.Endpoint
      # Start a worker by calling: MixyboosApi.Worker.start_link(arg)
      # {MixyboosApi.Worker, arg}
    ]

    # See https://hexdocs.pm/elixir/Supervisor.html
    # for other strategies and supported options
    opts = [strategy: :one_for_one, name: MixyboosApi.Supervisor]
    Supervisor.start_link(children, opts)
  end

  # Tell Phoenix to update the endpoint configuration
  # whenever the application is updated.
  def config_change(changed, _new, removed) do
    MixyboosApiWeb.Endpoint.config_change(changed, removed)
    :ok
  end
end
