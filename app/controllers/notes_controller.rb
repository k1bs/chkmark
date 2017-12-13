# Notes controller
class NotesController < ApiController
  before_action :require_login

  def index
    user = User.find_by_auth_token!(request.headers[:token])
    notes = user.notes
    render json: {
      notes: notes
    }
  end

  def show
    note = Note.find(params[:id])
    render json: { note: note }
  end

  def create
    note = Note.new(note_params)
    note.user = current_user

    if monster.save
      render json: { message: 'ok', note: 'note' }
    else
      render json: { message: 'could not create note' }
    end
  end

  private

  def note_params
    params.require(:note).permit(:note)
  end
end
