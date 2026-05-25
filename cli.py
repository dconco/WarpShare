import os
import typer
from rich.console import Console

# Initialize Typer and Rich console for clean formatting
app = typer.Typer(
   name="WarpShare",
   help="⚡ Instant file sharing CLI tool (Local Wi-Fi & Remote Internet) ⚡",
   add_completion=False,
)
console = Console()

@app.command(name="local")
def local_share(
   path: str = typer.Argument(os.getcwd(), help="The directory path or file to share"),
   port: int = typer.Option(8080, "--port", "-p", help="Port to run the local server on"),
):
   """
   Share files instantly with anyone on your local Wi-Fi network.
   """
   if not os.path.exists(path):
      console.print(f"[bold red]Error:[/bold red] Path '{path}' does not exist.")
      raise typer.Exit(code=1)

   console.print(f"[bold green]Starting Local Sharing Server...[/bold green]")
   console.print(f"[yellow]Target Folder:[/yellow] {os.path.abspath(path)}")
   console.print(f"[yellow]Port:[/yellow] {port}")
   
   # TODO: Inject the local HTTP server logic & QR code generation here

@app.command(name="remote")
def remote_share(
   path: str = typer.Argument(os.getcwd(), help="The directory path or file to share"),
   port: int = typer.Option(8080, "--port", "-p", help="Internal port for the tunnel"),
):
   """
   Share files over the public internet with a remote receiver.
   """
   if not os.path.exists(path):
      console.print(f"[bold red]Error:[/bold red] Path '{path}' does not exist.")
      raise typer.Exit(code=1)

   console.print(f"[bold cyan]Initializing Secure Remote Connection...[/bold cyan]")
   console.print(f"[yellow]Target Folder:[/yellow] {os.path.abspath(path)}")
   
   # TODO: Inject Ngrok/WebRTC tunneling logic here

if __name__ == "__main__":
   app()
   