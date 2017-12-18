# Notes controller
class NotesController < ApiController
  before_action :require_login

  def index
    user = User.find_by_auth_token!(request.headers[:token])
    notes = user.notes.order(updated_at: :desc)
    render json: {
      notes: notes
    }
  end

  def show
    note = Note.find(params[:id])
    render json: { note: note }
  end

  def destroy
    Note.destroy(params[:id])
    render json: { message: 'delete successful' }
  end

  def update
    note = Note.update(params[:id], text: params[:text])
    render json: {
      message: 'ok',
      note: note
    }
  end

  def create
    note = Note.new(note_params)
    note.user = current_user

    if note.save
      render json: { message: 'ok', note: note }
    else
      render json: { message: 'could not create note' }
    end
  end

  private

  def note_params
    params.require(:note).permit(:text)
  end
end
